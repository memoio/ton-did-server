'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import axios from 'axios';
import { API_URL } from '../components/config/config';

interface DIDContextType {
    didInfo: {
        did: string;
        number: string;
        exist: boolean;
    };
    updateDID: () => Promise<void>;
}

export const DIDContext = createContext<DIDContextType | null>(null);

interface DIDContextProviderProps {
    children: ReactNode;
}

export const DIDProvider = ({ children }: DIDContextProviderProps) => {
    const [didInfo, setDIDInfo] = useState({
        did: "",
        number: "000000",
        exist: false,
    });
    const address = useTonAddress(false);

    const setDID = ({ did, number, exist }: { did: string; number: string, exist: boolean }) => {
        setDIDInfo({
            did: did,
            number: number,
            exist: exist,
        })
    }

    const HandleDID = async () => {
        try {
            const splitted = address.split(":")
            const splitedAddress = splitted[1];
            console.log(splitedAddress);

            const response = await axios.get(
                API_URL.AIRDROP_DID_INFO,
                {
                    params: {
                        "address": splitedAddress,
                    },
                }
            );

            if (response.status === 200) {
                setDID({
                    did: response.data.data.did,
                    number: response.data.data.number,
                    exist: response.data.data.exist !== 0,
                })
            }
        } catch (error) {
            alert(`Error binding wallet: ${error}`);
            return
        }
    };

    const updateDID = HandleDID;

    useEffect(() => {
        if (address !== "" && didInfo.did === "") {
            HandleDID();
        }
    }, [address]);

    return (
        <DIDContext.Provider value={{
            didInfo,
            updateDID
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