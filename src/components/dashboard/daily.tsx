// import Image from 'next/image'
// import { TbChevronRight, TbCheck } from 'react-icons/tb';
import Footer from '../reusable/footer';
import axios from "axios";
import { API_URL, TON_DID_WEB } from '../config/config';
import { useAction } from '../../context/ActionContext';
import { useDIDInfo } from '../../context/DIDContext';
import { useTonAddress } from '@tonconnect/ui-react';
import { useAuth } from '../../context/AuthContext';
import "../../App.css";

// const tweet1Text = "Come and participate in MEMO's points airdrop event!";
// const tweetUrl = 'https://x.com/MemoLabsOrg/status/1862453981072826816';

const Daily = () => {
    const dailyReward = [
        {
            title: "Visit MEMO's Twitter Page ",
            points: "+20 points",
            img: "/Images/coin.svg",
            pending: "Visit",
            done: "Visited",
        },
        {
            title: "Share Invite Link To Telegram",
            points: "+20 points",
            img: "/Images/coin.svg",
            pending: "Share",
            done: "Shared",
        },
        {
            title: "Share Invite Link To Discord",
            points: "+20 points",
            img: "/Images/coin.svg",
            pending: "Share",
            done: "Shared",
        },
        {
            title: "Share Invite Link To Twitter",
            points: "+20 points",
            img: "/Images/coin.svg",
            pending: "Share",
            done: "Shared",
        },
    ]
    const communityquest = [
        {
            title: "Follow Our Twitter",
            points: "+50 points",
            img: "/Images/x.jpeg",
            url: "https://x.com/MemoLabsOrg",
            pending: "Follow",
            done: "Followed",
        },
        {
            title: "Join Our TG Channel",
            points: "+50 points",
            img: "/Images/tg.png",
            url: "https://t.me/memolabsio",
            pending: "Join",
            done: "Joined",
        },
        {
            title: "Join Our Discord",
            points: "+50 points",
            img: "/Images/discord.png",
            url: 'https://discord.com/invite/YG4Ydv2E7X',
            pending: "Join",
            done: "Joined",
        },
        // {
        //     title: "Share to Twitter",
        //     points: "+50 points",
        //     img: "/Images/x.jpeg",
        //     url: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet1Text) + '&url=' + encodeURIComponent(tweetUrl)
        // },
    ]
    const { dailyAction, questAction, setDaily, setQuest } = useAction();
    // const { dailyAction, setDaily } = useAction();
    const { userInfo, addPoint } = useAuth();
    const address = useTonAddress();
    const { didInfo } = useDIDInfo();

    const currentUrl = `${TON_DID_WEB}?startapp=${userInfo?.inviteCode}`;
    const tweetText = `📈I found a platform that can own, manage and monetize your data @MemoLabsOrg!

🚀Currently all users can participate, and you can easily get points rewards by completing tasks, and you can also redeem more value!

➡️Experience now ${currentUrl}
`
    const tgText = `🎉 Welcome to the MEMO data ecosystem, a platform where you can own, manage and monetize your data! 💰

🌟 You can easily earn points by completing tasks within the platform, and you can also unlock exclusive tasks with multiple partners to get points!
·Create DID 📝
·Link Social Media Accounts🔗
·Daily Check-in📅
·Joint Activities🤝
·Invite friends👫

🚀 Click ${currentUrl} to start your data value-added journey!
`

    const handleDailyClick = async (index: number) => {
        try {
            if (address != "") {
                if (didInfo.exist) {
                    const urls = [
                        { url: "https://x.com/MemoLabsOrg" },
                        { url: 'https://t.me/share/url?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(tgText) },
                        { url: 'https://discord.com/invite/YG4Ydv2E7X' },
                        { url: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText) },
                    ];
                    window.open(urls[index].url, '_blank');
                    const actionId = 70 + index;
                    console.log(actionId);
                    const respond = await axios.post(API_URL.AIRDROP_RECORD_ADD, {
                        "actionid": actionId,
                        "address": address
                    }, {
                        headers: {
                            "accept": "application/hal+json",
                            "Content-Type": "application/json",
                        }
                    });

                    console.log(respond.data);
                    if (respond.status === 200 && respond.data.result === 1) {
                        addPoint(20);
                        setDaily(index);
                    } else if (respond.status === 200 && respond.data.error !== "") {
                        alert(respond.data.error);
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
                if (didInfo.exist) {
                    window.open(communityquest[index].url, '_blank');
                    const actionId = 50 + index;
                    console.log(actionId);
                    const respond = await axios.post(API_URL.AIRDROP_RECORD_ADD, {
                        "actionid": actionId,
                        "address": address
                    }, {
                        headers: {
                            "accept": "application/hal+json",
                            "Content-Type": "application/json",
                        }
                    });

                    if (respond.status === 200 && respond.data.result === 1) {
                        addPoint(50);
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
                                <div key={index} className={`w-full h-[65px] flex flex-row items-center justify-between px-[5%] border border-[#05F292] bg-[#05F2924D] border-solid rounded-[15px]`}>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <div className='flex flex-col'>
                                                <p className='text-white'>{item.title}</p>
                                                <p className='text-[13px] text-[#05F292]'>{item.points}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDailyClick(index)} disabled={dailyAction.has(index)} className={`w-[80px] h-[26px] rounded-[16px] flex items-center justify-center flex-row gap-2 ${dailyAction.has(index) ? 'bg-[#05F2924D]' : 'bg-[#05F292]'}`}>
                                            <p className="text-[15px] text-black">{dailyAction.has(index) ? item.done : item.pending}</p>
                                        </button>
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
                                <div key={index} className={`w-full h-[65px] flex flex-row items-center justify-between px-[5%] border border-[#05F292] bg-[#05F2924D] border-solid rounded-[15px]`}>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <div className='flex flex-col'>
                                                <p className='text-white'>{item.title}</p>
                                                <p className='text-[13px] text-[#05F292]'>{item.points}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleQuestClick(index)} disabled={questAction.has(index)} className={`w-[80px] h-[26px] rounded-[16px] flex items-center justify-center flex-row gap-2 ${questAction.has(index) ? 'bg-[#05F2924D]' : 'bg-[#05F292]'}`}>
                                            <p className="text-[15px] text-black">{questAction.has(index) ? item.done : item.pending}</p>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Your Streak</p>
                    <div className='flex flex-col gap-2'>
                        <div className='w-full h-[65px] flex flex-row items-center justify-between px-[5%] border border-[#05F292] bg-[#023B23] border-solid rounded-[15px]'>
                            <div className='flex flex-col leading-none gap-2'>
                                <p className='text-[16px] text-[#05F292]'>3 days Streaks</p>
                                <div>
                                    <div className='flex flex-row items-center gap-1'>
                                        <p className='text-[14px] text-white'>Check-in tomorrow for a bonus reward.(+20 Points)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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