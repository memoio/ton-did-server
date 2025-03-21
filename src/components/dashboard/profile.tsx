'use client'
// import Image from 'next/image'
import { useState } from 'react'
import Footer from '../reusable/footer';
import { TON_DID_WEB } from '../config/config';
import { useDIDInfo } from "../../context/DIDContext";
import { useAuth } from "../../context/AuthContext";
import { useTonAddress } from '@tonconnect/ui-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    const { didInfo } = useDIDInfo();
    const { userInfo } = useAuth();
    const address = useTonAddress();
    const [showPopup, setShowPopup] = useState<string | null>(null);

    const handleCopy = () => {
        const textToCopy = address;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setShowPopup(`Copied: ${textToCopy}`);
            setTimeout(() => setShowPopup(null), 1500); // Hide popup after 1.5 seconds
        }).catch(() => {
            alert('Failed to copy.');
        });
    }
    const handleCopy2 = () => {
        const textToCopy = didInfo.did;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setShowPopup(`Copied: ${textToCopy}`);
            setTimeout(() => setShowPopup(null), 1500); // Hide popup after 1.5 seconds
        }).catch(() => {
            alert('Failed to copy.');
        });
    }
    const handleCopy3 = () => {
        const textToCopy = `${TON_DID_WEB}?referralCode=${userInfo?.inviteCode}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setShowPopup(`Copied: ${textToCopy}`);
            setTimeout(() => setShowPopup(null), 1500); // Hide popup after 1.5 seconds
        }).catch(() => {
            alert('Failed to copy.');
        });
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
                        <div className='w-full h-[65px] flex flex-row items-center justify-between px-[5%] bg-[#05F2924D] border border-[#05F292] border-solid rounded-[15px]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p className='font-bold text-white phetsarath2'>Wallet Address</p>
                                <div className='w-[137px] h-[28px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                                    <p className='phetsarath2 text-[15px] text-black'>{address.slice(0, 6)}...{address.slice(42)}</p>
                                    <div >
                                        <img onClick={handleCopy} src={"/Images/copy.svg"} width={11} height={12.22} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[65px] flex flex-row items-center justify-between px-[5%] bg-[#05F2924D] border border-[#05F292] border-solid rounded-[15px]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p className='font-bold text-white phetsarath2'>DID</p>
                                <div className='w-[137px] h-[28px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                                    <p className='phetsarath2 text-[15px] text-black'>{didInfo.did.slice(0, 8)}...{didInfo.did.slice(69)}</p>
                                    <div >
                                        <img onClick={handleCopy2} src={"/Images/copy.svg"} width={11} height={12.22} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-5 z-[400]">
                            <div className="relative">
                                <img src={"/Images/email.svg"} alt="" width={40.0} height={40.0} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover z-10" />
                                <div className="w-full flex flex-col gap-5 z-[400]">
                                    <div className="w-full h-[65px] rounded-[12px] flex flex-row items-center justify-between gap-4">
                                        <div className="w-full h-[65px] rounded-[12px] bg-[#05F2924D] flex flex-row items-center justify-between px-[5%] border border-[#05F292] border-solid rounded-[15px]">
                                            <div className="flex flex-col leading-none gap-1">
                                                <p className="font-bold text-white phetsarath2">DID Number</p>
                                            </div>
                                        </div>
                                        <div className="w-full h-[65px] rounded-[12px] bg-[#05F2924D] flex flex-row items-center justify-end px-[5%] border border-[#05F292] border-solid rounded-[15px]">
                                            <div className="flex flex-col leading-none items-end gap-1">
                                                <p className="font-bold text-[#05F292] phetsarath2">{didInfo.number}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-5 z-[400]">
                            <div className="relative">
                                <img src={"/Images/email.svg"} alt="" width={40.0} height={40.0} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover z-10" />
                                <div className="w-full flex flex-col gap-5 z-[400]">
                                    <div className="w-full h-[65px] rounded-[12px] flex flex-row items-center justify-between gap-4">
                                        <div className="w-full h-[65px] rounded-[12px] bg-[#05F2924D] flex flex-row items-center justify-between px-[5%] border border-[#05F292] border-solid rounded-[15px]">
                                            <div className="flex flex-col leading-none gap-1">
                                                <p className="font-bold text-white phetsarath2">Invite Code</p>
                                            </div>
                                        </div>
                                        <div className="w-full h-[65px] rounded-[12px] bg-[#05F2924D] flex flex-row items-center justify-end px-[5%] border border-[#05F292] border-solid rounded-[15px]">
                                            <div className="flex flex-col leading-none items-end gap-1">
                                                <p className="font-bold text-[#05F292] phetsarath2">{userInfo?.inviteCode}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='paytone text-[18px] font-bold text-white'>Account Status</p>
                    <div className="w-full flex flex-col gap-5 z-[400]">
                        <div className="relative">
                            <img src={"/Images/email.svg"} alt="" width={40.0} height={40.0} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover z-10" />
                            <div className="w-full flex flex-col gap-5 z-[400]">
                                <div className="w-full h-[70px] rounded-[12px] flex flex-row items-center justify-between gap-4">
                                    <div className="w-full h-[70px] rounded-[12px] bg-[#05F2924D] flex flex-row items-center justify-between px-[5%] border border-[#05F292] border-solid rounded-[15px]">
                                        <div className="flex flex-col leading-none gap-1">
                                            <p className="font-bold text-white phetsarath2">Points Earned</p>
                                            <p className="font-bold text-[#05F292] phetsarath2">{userInfo?.points}</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-[70px] rounded-[12px] bg-[#05F2924D] flex flex-row items-center justify-end px-[5%] border border-[#05F292] border-solid rounded-[15px]">
                                        <div className="flex flex-col leading-none items-end gap-1">
                                            <p className="font-bold text-white phetsarath2">Active Referrals</p>
                                            <p className="font-bold text-[#05F292]">{userInfo?.inviteCount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[65px] flex flex-row items-center justify-between px-[5%] bg-[#05F2924D] border border-[#05F292] border-solid rounded-[15px]'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <p className='font-bold text-white phetsarath2'>Your Referral Link</p>
                            <div className='w-[137px] h-[28px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                                <p className='phetsarath2 text-[15px] text-black'>{TON_DID_WEB.slice(8, 20)}...</p>
                                <div >
                                    <img onClick={handleCopy3} src={"/Images/copy.svg"} width={11} height={12.22} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showPopup && (
                    <div className="fixed bottom-22 right-4 bg-[#04D582] text-white text-[18px] sm:text-[20px] md:text-[22px] px-6 py-4 rounded-md shadow-lg flex items-center gap-3 animate-slide-in-up z-[50]">
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "white" }} />
                        <p>{showPopup}</p>
                    </div>
                )}
                <div className='h-[50px]'></div>
            </div>
            {/* <Image src={"/Images/bgexport.svg"} className="absolute bottom-2 left-0 w-full" width={375} height={375} alt="" /> */}
            <Footer />
        </div>
    )
}

export default Profile