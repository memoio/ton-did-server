"use client";
import { ReactNode, useEffect, createContext, useContext, useState } from "react";
import { useTonAddress } from '@tonconnect/ui-react';
import axios from "axios";
import { API_URL } from "../components/config/config";

interface UserInfo {
    uid: string;
    token: string;
    inviteCode: string;
    inviteCount: number;
    points: number;

    newUser: boolean,
    bindedCode: boolean,
}

interface AuthContextType {
    setPoints: (points: number) => void;
    setBindWallet: () => void;
    userInfo: UserInfo | null;
}
// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
}

// Create the provider component
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const address = useTonAddress();
    const [isExist, setIsExist] = useState(false);


    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    const setBindWallet = () => {
        if (address != "") {
            const bindWallet = async () => {
                try {
                    const response = await axios.post(
                        API_URL.AIRDROP_USER_WALLET_BIND,
                        {
                            walletAddress: address,
                        },
                        {
                            headers: {
                                accept: "application/hal+json",
                                uid: "11735283", // 根据您的实际情况传入 uid
                                token: "37595d3a6e43876682b37cdcf941938e", // 根据您的实际情况传入 token
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    if (response.data.result === 1) {
                        const userresponse = await axios.get(API_URL.AIRDROP_USER_INFO, {
                            headers: {
                                "uid": response.data.data.uid,
                                "token": response.data.data.token,
                            },
                        });
                        console.log(userresponse.data.data);

                        if (userresponse.data.result === 1) {
                            setUserInfo({
                                uid: response.data.data.uid,
                                token: response.data.data.token,
                                newUser: response.data.data.lastLoginTime === 0 ? true : false,
                                bindedCode: userresponse.data.data.parentUid === null ? false : true,
                                inviteCode: userresponse.data.data.inviteCode,
                                inviteCount: userresponse.data.data.inviteCount,
                                points: userresponse.data.data.points,
                            })
                        }
                    } else {
                        alert(`Failed to bind wallet: ${JSON.stringify(response.data)}`);
                    }
                } catch (error) {
                    alert(`Error binding wallet: ${error}`);
                }
            };

            bindWallet();
            setIsExist(true);
        }
    }

    const setPoints = (points: number) => {
        setUserInfo(prevUserInfo => {
            if (!prevUserInfo) {
                return null;
            }
            return {
                ...prevUserInfo,
                points: points,
            };
        }
        )
    };

    useEffect(() => {
        if (address && address != "" && !isExist) {
            setBindWallet()
        }
    }, [address]);

    return (
        <AuthContext.Provider value={{ userInfo, setBindWallet, setPoints }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useWallet must be used within a AuthContextProvider');
    }

    return context;
};
