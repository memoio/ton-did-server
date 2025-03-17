// import Image from 'next/image'
import Footer from '../reusable/footer';
import { TON_DID_WEB } from '../config/config';
import { useAuth } from "../../context/AuthContext";

const Referal = () => {
    const { userInfo } = useAuth();
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
        { url: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText) },
    ];

    const handleInvite = (index: number) => {
        window.open(urls[index].url, '_blank');
    }

    const handleInviteTG = () => {
        window.open(urls[0].url, '_blank');
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
            <div className='w-full flex flex-col gap-8 z-[400]'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-4'>
                        <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                            <div className='flex flex-col leading-none gap-1'>
                                <p className='font-bold text-white phetsarath2'>Active Referrals</p>
                                <p className='font-bold text-[#05F292]'>{userInfo?.inviteCount}</p>

                            </div>
                            <img src={"/Images/Line.svg"} width={1} height={1} alt='' />
                            <div className='flex flex-col leading-none justify-end items-end gap-1'>
                                <p className='font-bold text-white phetsarath2'>Points Earned</p>
                                <p className='font-bold text-[#05F292] phetsarath2'>{userInfo?.points}</p>
                            </div>
                        </div>
                        {
                            invites.map((item, index) => (
                                <div key={index} className='element w-full h-[70px] flex flex-row items-center justify-between px-[5%]'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <img src={item.img} width={30} height={30} alt='' />
                                            <div className='flex flex-col phetsarath2'>
                                                <p className='font-bold text-white'>{item.title}</p>
                                                <p className='font-bold text-[13px] text-[#05F292] phetsarath2'>{item.point}</p>
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
            <div className='bg-[#022115] flex flex-col items-center justify-center gap-2 w-[292px] h-[160px] rounded-[16px]'>
                <p className='text-[14px] font-bold phetsarath2 text-[#05F292]'>Your referral Link</p>
                <div className='bg-[#FFFFFF21] w-[208px] h-[25px] items-center justify-center flex'>
                    <p className='text-[#04D5FF] text-[12px]'>{TON_DID_WEB}?referralCode={userInfo?.inviteCode} </p>
                </div>
                {/* <p className='text-[14px] phetsarath text-[#05F292]'>You haven’t invited anyone yet</p> */}
                <div className='flex flex-row items-center gap-3'>
                    <button onClick={handleInviteTG} className='w-[100px] h-[32px] py-2 flex items-center justify-center rounded-[23px] bg-[#05F292] hover:bg-gray-100 active:bg-gray-200 transition-colors'>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={"/Images/plus.svg"} width={18} height={18} alt='' />
                            <p className='text-[10px] phetsarath'>Invite a Friend</p>
                        </div>
                    </button>
                    <button className='w-[100px] h-[32px] py-2 flex items-center justify-center rounded-[23px] bg-white hover:bg-gray-100 active:bg-gray-200 transition-colors'>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={"/Images/cop.svg"} width={18} height={18} alt='' />
                            <p className='text-[10px] phetsarath text-black'>Copy your referral link</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className='h-[50px]'></div>
            <Footer />
        </div>
    )
}

export default Referal