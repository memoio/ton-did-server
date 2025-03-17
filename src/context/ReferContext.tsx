"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface ReferContextType {
    referCode: string;
    setCode: (code: string) => void;
}

export const ReferContext = createContext<ReferContextType | null>(null);

interface ReferContextProviderProps {
    children: ReactNode;
}

export const ReferContextProvider = ({ children }: ReferContextProviderProps) => {
    const [referCode, setReferCode] = useState("");

    const setCode = (code: string) => {
        setReferCode(code);
    }

    return (
        <ReferContext.Provider value={{
            referCode,
            setCode
        }}>
            {children}
        </ReferContext.Provider>
    );
}

export const useRefer = (): ReferContextType => {
    const context = useContext(ReferContext);

    if (!context) {
        throw new Error("useDid must be used within a DidContextProvider");
    }

    return context;
};