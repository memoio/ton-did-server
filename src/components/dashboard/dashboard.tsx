// import Image from 'next/image'
import Footer from '../reusable/footer';
import { useDIDInfo } from "../../context/DIDContext";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
    const { didInfo } = useDIDInfo();
    const { userInfo } = useAuth();

    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center pt-[10%] overflow-hidden px-[6%] gap-4'>
            <img src={"/Images/reward2.svg"} className='absolute top-0 left-0' width={40} height={60} alt='' />
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <p className='flex paytone text-[28px] font-normal text-white'>Welcome back,</p>
                    <p className='flex paytone text-[28px] font-normal text-[#05F292]'> {didInfo.did.slice(0, 13)}...{didInfo.did.slice(69)}</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-5 z-[400]'>
                <div className='flex flex-col gap-2'>

                    <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                        <p className='font-bold text-white'>Total Points</p>
                        <div className='flex flex-row items-center gap-1'>
                            <img src={"/Images/coin.svg"} width={22} height={22} alt='' />
                            <p className='text-white Phetsarath2 text-[16px] font-bold'>{userInfo?.points} Points</p>
                        </div>
                    </div>
                    <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                        <p className='font-bold text-white'>Total Referrals</p>
                        <div className='flex flex-col leading-none gap-2'>
                            <div className='flex flex-row items-center gap-1'>
                                <p className='Phetsarath2 text-[16px] font-bold text-[#05F292]'>{userInfo?.inviteCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Recent Activity</p>
                    <div className='flex flex-col gap-2'>
                        <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                            <div className='flex flex-col leading-none gap-1'>
                                <p className='font-bold text-white phetsarath2'>Completed Task</p>
                                <div>
                                    <div className='flex flex-row items-center gap-1'>
                                        <p className='font-bold text-[#C3C3C3] phetsarath'>Follow MEMO on Twitter</p>
                                        <p className='font-bold text-[#05F292] phetsarath'>(+10 Points)</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                            <div className='flex flex-row items-center gap-1'>
                                <p className='font-bold text-[#C3C3C3] phetsarath'>Shared Referral Link</p>
                                <p className='font-bold text-[#05F292] phetsarath'>(+10 Points)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Notifications</p>
                    <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                        <div className='flex flex-col leading-none gap-1'>
                            <p className='font-bold text-white phetsarath2'>New Referral Bonus:</p>
                            <div>
                                <div className='flex flex-row items-center gap-1'>
                                    <p className='font-bold text-[#05F292] phetsarath'>Earn 15 Points Per Invite</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={"/Images/bgexport.svg"} className="absolute bottom-2 left-0 w-full" width={375} height={375} alt="" />
            <Footer />
        </div>
    )
}

export default Dashboard