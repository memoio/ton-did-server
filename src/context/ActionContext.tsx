'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import axios from 'axios';
import { API_URL } from '../components/config/config';

interface ActionContextType {
    dailyAction: Set<number>;
    questAction: Set<number>;
    setDaily: (index: number) => void;
    setQuest: (index: number) => void;
    clear: () => void;
}

export const ActionContext = createContext<ActionContextType | null>(null);

interface ActionContextProviderProps {
    children: ReactNode;
}

export const ActionProvider = ({ children }: ActionContextProviderProps) => {
    // const [inviteCode, setInviteCode] = useState("")
    const [dailyAction, setDailyAction] = useState(new Set<number>());
    const [questAction, setQuestAction] = useState(new Set<number>());
    const address = useTonAddress();
    const setDaily = (index: number) => setDailyAction((prev) => new Set(prev).add(index));
    const setQuest = (index: number) => setQuestAction((prev) => new Set(prev).add(index));

    const clear = () => {
        setDailyAction(new Set());
        setQuestAction(new Set());
    }

    useEffect(() => {
        if (address != "") {
            const HandleDailyAction = async () => {
                try {
                    clear();

                    const oneTimeRespond = await axios.get(API_URL.AIRDROP_RECORD_LIST,
                        {
                            params: {
                                "page": 1,
                                "size": 20,
                                "ltype": 1,
                                "address": address
                            }
                        });

                    if (oneTimeRespond.status === 200) {
                        // eslint-disable-next-line
                        if (oneTimeRespond.data.data.length > 0) {
                            oneTimeRespond.data.data.some((element: any) => {
                                const action = element.action;
                                if (action >= 50 && action <= 53) {
                                    setQuestAction((prev) => new Set(prev).add(action - 50));
                                }
                            });
                        }
                    }

                    const dailyRespond = await axios.get(API_URL.AIRDROP_RECORD_LIST,
                        {
                            params: {
                                "page": 1,
                                "size": 20,
                                "ltype": 2,
                                "address": address
                            }
                        });

                    if (dailyRespond.status === 200) {
                        // eslint-disable-next-line
                        if (dailyRespond.data.data.length > 0) {
                            dailyRespond.data.data.forEach((element: any) => {
                                if (element.action <= 100) {
                                    const action = element.action - 70;
                                    const preDayTime = Date.now() - 86400000;
                                    if (element.time > preDayTime) {
                                        setDailyAction((prev) => new Set(prev).add(action));
                                    }
                                }
                            });
                        }
                    }
                } catch (error) {
                    alert(`Error binding wallet: ${error}`);
                    return
                }
            };

            HandleDailyAction();
        }
    }, [address]);

    return (
        <ActionContext.Provider value={{
            dailyAction,
            questAction,
            // cycleAction,
            // joinId,
            setDaily,
            setQuest,
            // setCycle,
            // joinProject,
            // leaveProject,
            clear,
            // inviteCode,
        }}>
            {children}
        </ActionContext.Provider>
    );
}

export const useAction = () => {
    const context = useContext(ActionContext);

    if (!context) {
        throw new Error('useWallet must be used within a WalletContextProvider');
    }

    return context;
};