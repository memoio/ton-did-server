"use client";
import { ReactNode, useEffect, createContext, useContext, useState } from "react";
import { useTonAddress } from '@tonconnect/ui-react';
import axios from "axios";
import { API_URL } from "../components/config/config";

interface UserInfo {
    inviteCode: string;
    inviteCount: string;
    points: number;

    pointsRank: string,
    bindedCode: boolean,
}

interface AuthContextType {
    setPoints: (points: number) => void;
    setBindWallet: () => void;
    addPoint: (point: number) => void;
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
                    const ipResponse = await axios.get("https://api.ipify.org?format=json")
                    if (ipResponse.status === 200) {
                        console.log(ipResponse.data.ip)
                        const response = await axios.post(
                            API_URL.AIRDROP_USER_WALLET_BIND,
                            {
                                address: address,
                                source: "Ton-DID",
                                useragent: navigator.userAgent,
                                ip: ipResponse.data.ip,
                            },
                            {
                                headers: {
                                    accept: "application/hal+json",
                                    "Content-Type": "application/json",
                                },
                            }
                        );
                        if (response.data.result === 1) {
                            const userresponse = await axios.get(API_URL.AIRDROP_USER_INFO, {
                                params: {
                                    "address": address,
                                },
                            });
                            console.log(userresponse)

                            if (userresponse.data.result === 1) {
                                setUserInfo({
                                    inviteCode: userresponse.data.data.inviteCode,
                                    inviteCount: userresponse.data.data.inviteCount,
                                    points: userresponse.data.data.points,
                                    bindedCode: userresponse.data.data.parentCode !== "",
                                    pointsRank: userresponse.data.data.pointsRank,
                                })
                            }
                        }
                        else {
                            alert(`Failed to bind wallet: ${JSON.stringify(response.data)}`);
                        }
                    } else {
                        alert(`Failed to get address: ${JSON.stringify(ipResponse.data)}`);
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

    const addPoint = (point: number) => {
        setUserInfo(prevUserInfo => {
            if (!prevUserInfo) {
                return null;
            }
            if (!prevUserInfo.points) {
                return {
                    ...prevUserInfo,
                    points: point,
                }
            }
            return {
                ...prevUserInfo,
                points: prevUserInfo.points + point,
            };
        }
        )
    }

    useEffect(() => {
        if (address && address != "" && !isExist) {
            setBindWallet()
        }
    }, [address]);

    return (
        <AuthContext.Provider value={{ userInfo, setBindWallet, setPoints, addPoint }}>
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
