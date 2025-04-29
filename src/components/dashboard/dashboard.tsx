// import Image from 'next/image'
import Footer from '../reusable/footer';
import { useDIDInfo } from "../../context/DIDContext";
import { useAuth } from "../../context/AuthContext";
import { useTonAddress } from '@tonconnect/ui-react';
import "../../App.css";

const Dashboard = () => {
    const { didInfo } = useDIDInfo();
    const { userInfo } = useAuth();
    const address = useTonAddress();

    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center pt-[10%] overflow-hidden px-[6%] gap-8 overflow-y-scroll'>
            <img src={"/Images/reward2.svg"} className='absolute top-0 left-0' width={40} height={60} alt='' />
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <p className='flex paytone text-[43px] praise-regular text-white'>Welcome Back</p>
                    <p className='flex paytone text-[28px] font-normal text-[#05F292]'> {didInfo.exist ? `${didInfo.did.slice(0, 13)}...${didInfo.did.slice(69)}` : `${address.slice(0, 6)}...${address.slice(42)}`}</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-5 z-[400]'>
                <div className='flex flex-col gap-2'>

                    <div className='border border-[#05F292] border-solid rounded-[15px]'>
                        <div className='w-full h-[56px] rounded-[12px] flex flex-row items-center justify-between px-[5%] bg-[#05F2924D]'>
                            <p className='text-white'>Total Points</p>
                            <div className='flex flex-row items-center gap-1'>
                                <img src={"/Images/coin.svg"} width={22} height={22} alt='' />
                                <p className='text-white Phetsarath2 text-[16px] font-bold'>{userInfo?.points} Points</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#05F292] border-solid rounded-[15px]'>
                        <div className='w-full h-[56px] rounded-[12px] flex flex-row items-center justify-between px-[5%] bg-[#05F2924D]'>
                            <p className='text-white'>Total Referrals</p>
                            <div className='flex flex-row items-center gap-1'>
                                <p className='text-white text-[16px] font-bold'>{userInfo?.inviteCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Recent Activity</p>
                    <div className='flex flex-col gap-2'>
                        <div className='w-full h-[60px] flex flex-row items-center justify-between px-[5%] border border-[#05F292] bg-[#023B23] border-solid rounded-[15px]'>
                            <div className='flex flex-col leading-none gap-2'>
                                <p className='text-[16px] text-white'>Completed Daily Task</p>
                                <div>
                                    <div className='flex flex-row items-center gap-1'>
                                        <p className='text-[12px] text-[#C3C3C3]'>Visit MEMO on Twitter</p>
                                        <p className='text-[12px] text-[#05F292]'>(+20 Points)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[60px] flex flex-row items-center justify-between px-[5%] border border-[#05F292] bg-[#023B23] border-solid rounded-[15px]'>
                            <div className='flex flex-col leading-none gap-2'>
                                <p className='text-[16px] text-white'>Completed Community Task</p>
                                <div>
                                    <div className='flex flex-row items-center gap-1'>
                                        <p className='text-[12px] text-[#C3C3C3]'>Follow MEMO on Twitter</p>
                                        <p className='text-[12px] text-[#05F292]'>(+50 Points)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Notifications</p>
                    <div className='w-full h-[60px] flex flex-row items-center justify-between px-[5%] border border-[#05F292] bg-[#023B23] border-solid rounded-[15px]'>
                        <div className='flex flex-col leading-none gap-2'>
                            <p className='text-white'>New Referral Bonus:</p>
                            <div>
                                <div className='flex flex-row items-center gap-1'>
                                    <p className='text-[12px] text-[#05F292]'>When your friend binds the invitation code, he or she will get 500 points, you will get 200 points.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[50px]'></div>
            </div>
            <img src={"/Images/bgexport.svg"} className="absolute bottom-2 left-0 w-full" width={375} height={375} alt="" />
            <Footer />
        </div>
    )
}

export default Dashboard