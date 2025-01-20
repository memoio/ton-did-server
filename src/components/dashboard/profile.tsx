'use client'
// import Image from 'next/image'
import { useState } from 'react'
import Footer from '../reusable/footer';

const Profile = () => {
    const [copied, setCopied] = useState(false)
    const [copied2, setCopied2] = useState(false)
    const [copied3, setCopied3] = useState(false)
    const walletAddress = "0x1234...5678";
    const did = "did:memo...578";
    const link = "www.miniPP...";

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress)
        setCopied(true)
    }
    const handleCopy2 = () => {
        navigator.clipboard.writeText(did)
        setCopied2(true)
    }
    const handleCopy3 = () => {
        navigator.clipboard.writeText(link)
        setCopied3(true)
    }
    return (
        <div className='w-full relative bg flex-col flex items-center pt-[10%] overflow-hidden px-[6%] gap-8 overflow-y-scroll'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <p className='flex paytone text-[28px] font-normal text-[#05F292]'>Profile</p>
                    <p className='text-center text-[13px] text-white w-[80%]'>View and update your information, track your progress, and access your referral link</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-8 z-[400]'>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Profile Detail</p>
                    <div className='flex flex-col gap-2'>
                        <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p className='font-bold text-[13px] text-white phetsarath2'>Wallet Address</p>
                                <div className='w-[137px] h-[28px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                                    <p className='phetsarath2 text-[15px] text-black'>{walletAddress}</p>
                                    <div >
                                        {
                                            copied === true ? <img src={"/Images/check.svg"} width={11} height={12.22} alt="" /> :
                                                <img onClick={handleCopy} src={"/Images/copy.svg"} width={11} height={12.22} alt="" />
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p className='font-bold text-[13px] text-white phetsarath2'>DID</p>
                                <div className='w-[137px] h-[28px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                                    <p className='phetsarath2 text-[15px] text-black'>{did}</p>
                                    <div >
                                        {
                                            copied2 === true ? <img src={"/Images/check.svg"} width={11} height={12.22} alt="" /> :
                                                <img onClick={handleCopy2} src={"/Images/copy.svg"} width={11} height={12.22} alt="" />
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p className='font-bold text-[13px] text-white phetsarath2'>DID Number</p>
                                <p className=' text-[#05F292] phetsarath2 text-[15px]'>
                                    DID-0012345678
                                </p>
                            </div>
                        </div>
                        <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p className='font-bold text-[13px] text-white phetsarath2'>Invite Code</p>
                                <p className=' text-[#05F292] phetsarath2 text-[15px]'>
                                    0012345
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Account Status</p>
                    <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                        <div className='flex flex-col leading-none gap-1'>
                            <p className='font-bold text-white phetsarath2'>Points Earned</p>
                            <div className='flex flex-row items-center gap-1'>
                                <img src={"/Images/coin.svg"} width={13} height={13} alt="" />
                                <p className='font-bold text-[#05F292]'>350 Points</p>
                            </div>
                        </div>
                        <img src={"/Images/Line.svg"} width={1} height={1} alt='' />
                        <div className='flex flex-col leading-none justify-end items-end gap-1'>
                            <p className='font-bold text-white phetsarath2'>Active Referral</p>
                            <p className='font-bold text-[#05F292] phetsarath2'>5</p>
                        </div>
                    </div>
                    <div className='element w-full h-[56px] flex flex-row items-center justify-between px-[5%]'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <p className='font-bold text-[13px] text-white phetsarath2'>Your Referral Link</p>
                            <div className='w-[137px] h-[28px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                                <p className='phetsarath2 text-[15px] text-black'>{link}</p>
                                <div >
                                    {
                                        copied3 === true ? <img src={"/Images/check.svg"} width={11} height={12.22} alt="" /> :
                                            <img onClick={handleCopy3} src={"/Images/copy.svg"} width={11} height={12.22} alt="" />
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[50px]'></div>
            </div>
            {/* <Image src={"/Images/bgexport.svg"} className="absolute bottom-2 left-0 w-full" width={375} height={375} alt="" /> */}
            <Footer />
        </div>
    )
}

export default Profile