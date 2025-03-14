// import Image from 'next/image'
import { TbChevronRight, TbCheck } from 'react-icons/tb';
import Footer from '../reusable/footer';
import axios from "axios";
import { API_URL } from '../config/config';
import { useAction } from '../../context/ActionContext';
import { useDIDInfo } from '../../context/DIDContext';
import { useTonAddress } from '@tonconnect/ui-react';
import { useAuth } from '../../context/AuthContext';

const Daily = () => {
    const dailyReward = [
        {
            title: "Check in",
            points: "+20 points",
            img: "/Images/coin.svg"
        },
        {
            title: "Share to chat group",
            points: "+20 points",
            img: "/Images/coin.svg"
        },
        {
            title: "Share to friends",
            points: "+20 points",
            img: "/Images/coin.svg"
        },
        {
            title: "Share to Twitter",
            points: "+20 points",
            img: "/Images/coin.svg"
        },
    ]
    const communityquest = [
        {
            title: "Follow our Twitter",
            points: "+20 points",
            img: "/Images/x.jpeg"
        },
        {
            title: "Join our TG channel",
            points: "+20 points",
            img: "/Images/tg.png"
        },
        {
            title: "Join our discord",
            points: "+20 points",
            img: "/Images/discord.png"
        },
        {
            title: "Share to Twitter",
            points: "+20 points",
            img: "/Images/x.jpeg"
        },
    ]
    const { dailyAction, questAction, setDaily, setQuest } = useAction();
    const { userInfo, setPoints } = useAuth();
    const address = useTonAddress();
    const { didInfo } = useDIDInfo();

    const handleDailyClick = async (index: number) => {
        try {
            if (address != "") {
                if (didInfo.did != "") {
                    const actionId = 70 + index;
                    console.log(actionId);
                    const respond = await axios.post(API_URL.AIRDROP_RECORD_ADD, {
                        "action": actionId
                    }, {
                        headers: {
                            "accept": "application/hal+json",
                            "Content-Type": "application/json",
                            "uid": userInfo?.uid,
                            "token": userInfo?.token
                        }
                    });

                    if (respond.status === 200 && respond.data.result === 1) {
                        setPoints(respond.data.data.totalPoints);
                        setDaily(index);
                    }

                } else {
                    alert("Please create did first!")
                }
            }
        } catch (error) {
            alert(error);
            return
        }
    }

    const handleQuestClick = async (index: number) => {
        try {
            if (address != "") {
                if (didInfo.did != "") {
                    const actionId = 50 + index;
                    console.log(actionId);
                    const respond = await axios.post(API_URL.AIRDROP_RECORD_ADD, {
                        "action": actionId
                    }, {
                        headers: {
                            "accept": "application/hal+json",
                            "Content-Type": "application/json",
                            "uid": userInfo?.uid,
                            "token": userInfo?.token
                        }
                    });

                    if (respond.status === 200 && respond.data.result === 1) {
                        setPoints(respond.data.data.totalPoints);
                        setQuest(index);
                    }

                } else {
                    alert("Please create did first!")
                }
            }
        } catch (error) {
            alert(error);
            return
        }
    }
    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center pt-[10%] overflow-hidden px-[6%] gap-8 overflow-y-scroll'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <p className='flex paytone text-[28px] font-normal text-white flex-row gap-2'>Daily <span className='text-[#05F292]'>Check-In</span></p>
                    <p className='text-center text-[13px] text-white w-[80%]'>Complete today’s task to collect your daily points and keep your streak alive.</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-8 z-[400]'>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Today&apos;s Task</p>
                    <div className='flex flex-col gap-2'>
                        {
                            dailyReward.map((item, index) => (
                                <div key={index} className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                                    <div className='flex flex-row items-center gap-3'>
                                        <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                                            <img src={item.img} width={30} height={30} alt='' />
                                        </div>
                                        <div className='flex flex-col leading-none gap-3'>
                                            <p className='font-bold text-white phetsarath2'>{item.title}</p>
                                            <p className='text-[#C3C3C3] text-[12px] phetsarath'>{item.points}</p>
                                        </div>
                                    </div>
                                    <div className='text-2xl text-white' onClick={() => handleDailyClick(index)}>
                                        {dailyAction.has(index) ? <TbCheck /> : <TbChevronRight />}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>MEMO Community Quests</p>
                    <div className='flex flex-col gap-2'>
                        {
                            communityquest.map((item, index) => (
                                <div key={index} className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                                    <div className='flex flex-row items-center gap-3'>
                                        <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                                            <img src={item.img} width={30} height={30} alt='' />
                                        </div>
                                        <div className='flex flex-col leading-none gap-3'>
                                            <p className='font-bold text-white phetsarath2'>{item.title}</p>
                                            <p className='text-[#C3C3C3] text-[12px] phetsarath'>{item.points}</p>
                                        </div>
                                    </div>
                                    <div className='text-2xl text-white' onClick={() => handleQuestClick(index)}>
                                        {questAction.has(index) ? <TbCheck /> : <TbChevronRight />}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='h-[50px]'></div>
            </div>
            <img src={"/Images/bgexport.svg"} className="fixed bottom-2 left-0 w-full" width={375} height={375} alt="" />
            <Footer />
        </div>
    )
}

export default Daily