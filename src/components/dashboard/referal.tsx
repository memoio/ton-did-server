// import Image from 'next/image'
import { useState } from 'react'
import Footer from '../reusable/footer';
import { TON_DID_WEB } from '../config/config';
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// declare global {
//     interface Window {
//         Telegram?: {
//             WebApp: {
//                 openLink(url: string): void;
//                 openTelegramLink(url: string): void;
//                 // 其他你可能需要的方法
//                 sendData(data: string): void;
//                 initData: string;
//                 startParam?: string;
//                 initDataUnsafe: {
//                     user?: {
//                         id: number;
//                         first_name?: string;
//                         last_name?: string;
//                         username?: string;
//                     };
//                 };
//             };
//         };
//     }
// }

const Referal = () => {
    const { userInfo } = useAuth();
    const [showPopup, setShowPopup] = useState<string | null>(null);

    const invites = [
        {
            img: "/Images/token2.svg",
            point: "300 points",
            title: "Invite a Friend with Telegram"
        },
        {
            img: "/Images/token2.svg",
            point: "300 points",
            title: "Invite a Friend with twitter"
        },

    ];

    const currentUrl = `${TON_DID_WEB}?referralCode=${userInfo?.inviteCode}`;
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
`;
    const urls = [
        { url: 'https://t.me/share/url?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(tgText) },
        { url: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText), },
    ];

    const handleInvite = (index: number) => {
        if (window.Telegram?.WebApp?.openTelegramLink && index == 0) {
            window.Telegram.WebApp.openTelegramLink(urls[index].url);
        }
        else {
            window.open(urls[index].url, '_blank');
        }
    }

    const handleInviteTG = () => {
        if (window.Telegram?.WebApp?.openTelegramLink) {
            window.Telegram.WebApp.openTelegramLink(urls[0].url);
        }
        else {
            window.open(urls[0].url, '_blank');
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(currentUrl).then(() => {
            setShowPopup(`Copied`);
            setTimeout(() => setShowPopup(null), 1500); // Hide popup after 1.5 seconds
        }).catch(() => {
            alert('Failed to copy.');
        });
    }

    return (
        <div className='w-full relative bg flex-col flex items-center pt-[10%] overflow-hidden px-[6%] gap-8 overflow-y-scroll'>
            <img src={"/Images/friends.svg"} width={98} height={98} alt='' />
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center w-full gap-3'>
                    <div className='flex flex-col items-center leading-none'>
                        <p className='flex paytone text-[28px] font-normal text-[#05F292] flex-row gap-2 text-center'>Refer Friends <span className='text-white'>And</span></p>
                        <p className='flex paytone text-[28px] text-white'>Earn Rewards</p>
                    </div>
                    <p className='text-center text-[13px] text-white w-[80%]'>Share your unique invitation link with friends and earn points for every successful referral!</p>
                </div>
            </div>

            <div className="w-full flex flex-col gap-5 z-[400]">
                <div className="relative">
                    <img src={"/Images/email.svg"} alt="" width={40.0} height={40.0} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover z-10" />
                    <div className="w-full flex flex-col gap-5 z-[400]">
                        <div className="w-full h-[70px] rounded-[12px] flex flex-row items-center justify-between gap-4">
                            <div className="w-full h-[70px] rounded-[12px] bg-[#05F2924D] flex flex-row items-center justify-between px-[5%] border border-[#05F292] border-solid rounded-[15px]">
                                <div className="flex flex-col leading-none gap-1">
                                    <p className="font-bold text-white phetsarath2">Active Referrals</p>
                                    <p className="font-bold text-[#05F292]">{userInfo?.inviteCount}</p>
                                </div>
                            </div>
                            <div className="w-full h-[70px] rounded-[12px] bg-[#05F2924D] flex flex-row items-center justify-end px-[5%] border border-[#05F292] border-solid rounded-[15px]">
                                <div className="flex flex-col leading-none items-end gap-1">
                                    <p className="font-bold text-white phetsarath2">Points Earned</p>
                                    <p className="font-bold text-[#05F292] phetsarath2">{userInfo?.points}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-8 z-[400]'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-4'>
                        {
                            invites.map((item, index) => (
                                <div key={index} className='w-full h-[70px] flex flex-row items-center justify-between px-[5%] border border-[#05F292] bg-[#022918] border-solid rounded-[15px]'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <img src={item.img} width={30} height={30} alt='' />
                                            <div className='flex flex-col phetsarath2'>
                                                <p className='font-bold text-[#05F292]'>{item.title}</p>
                                                <p className='font-bold text-[13px] text-white phetsarath2'>{item.point}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleInvite(index)} className='w-[57px] h-[26px] rounded-[16px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                                            <p className='phetsarath2 text-[15px] text-black'>Invite</p>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='bg-[#025533] flex flex-col items-center justify-center gap-2 w-[350px] h-[160px] rounded-[16px] border border-[#05F292] border-solid'>
                <p className='text-[15px] font-bold phetsarath2 text-white'>Your Referral Link</p>
                <div className='bg-[#FFFFFF21] w-[240px] h-[35px] items-center justify-center flex'>
                    <p className='text-[#04D5FF] text-[12px]'>{TON_DID_WEB}?referralCode={userInfo?.inviteCode} </p>
                </div>
                {/* <p className='text-[14px] phetsarath text-[#05F292]'>You haven’t invited anyone yet</p> */}
                <div className='flex flex-row items-center gap-3'>
                    <button onClick={handleInviteTG} className='w-[120px] h-[32px] py-2 flex items-center justify-center rounded-[23px] bg-[#05F292] hover:bg-gray-100 active:bg-gray-200 transition-colors'>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={"/Images/plus.svg"} width={18} height={18} alt='' />
                            <p className='text-[10px] phetsarath text-black'>Invite a Friend</p>
                        </div>
                    </button>
                    <button onClick={handleCopy} className='w-[120px] h-[32px] py-2 flex items-center justify-center rounded-[23px] bg-white hover:bg-gray-100 active:bg-gray-200 transition-colors'>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={"/Images/cop.svg"} width={18} height={18} alt='' />
                            <p className='text-[10px] phetsarath text-[#074D35]'>Copy link</p>
                        </div>
                    </button>
                </div>
            </div>
            {showPopup && (
                <div className="fixed bottom-22 right-4 bg-[#04D582] text-white text-[18px] sm:text-[20px] md:text-[22px] px-6 py-4 rounded-md shadow-lg flex items-center gap-3 animate-slide-in-up z-[50]">
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "white" }} />
                    <p>{showPopup}</p>
                </div>
            )}
            <div className='h-[50px]'></div>
            <Footer />
        </div>
    )
}

export default Referal