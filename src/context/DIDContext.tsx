'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import axios from 'axios';
import { API_URL } from '../components/config/config';

interface DIDContextType {
    didInfo: {
        did: string;
        number: string;
    };
    setDID: (didInfo: {
        did: string;
        number: string;
    }) => void;
}

export const DIDContext = createContext<DIDContextType | null>(null);

interface DIDContextProviderProps {
    children: ReactNode;
}

export const DIDProvider = ({ children }: DIDContextProviderProps) => {
    const [didInfo, setDIDInfo] = useState({
        did: "",
        number: "000000",
    });
    const address = useTonAddress(false);

    const setDID = ({ did, number }: { did: string; number: string }) => {
        setDIDInfo({
            did: did,
            number: number,
        })
    }

    useEffect(() => {
        if (address != "") {
            // 调用绑定钱包接口
            const HandleDID = async () => {
                try {
                    console.log("clear");

                    const splitted = address.split(":")
                    const splitedAddress = splitted[1];
                    console.log(splitedAddress);

                    const response = await axios.get(
                        API_URL.DID_INFO,
                        {
                            params: {
                                "address": splitedAddress,
                            },
                        }
                    );

                    if (response.status === 200) {
                        console.log("didinfo:", response.data);
                        setDID({
                            did: response.data.did,
                            number: response.data.number.toString().padStart(6, '0'),
                        })
                    }
                } catch (error) {
                    alert(`Error binding wallet: ${error}`);
                    return
                }
            };

            HandleDID();
            // } else {
            //     clear();
            //     setInviteCode('******');
        }
    }, [address]);

    return (
        <DIDContext.Provider value={{
            didInfo,
            setDID
        }}>
            {children}
        </DIDContext.Provider>
    );
}

export const useDIDInfo = (): DIDContextType => {
    const context = useContext(DIDContext);

    if (!context) {
        throw new Error("useDid must be used within a DidContextProvider");
    }

    return context;
};