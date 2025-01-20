// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { useTonAddress } from '@tonconnect/ui-react';
import { useDIDInfo } from "../../context/DIDContext";
import Footer from '../reusable/footer';

const CreatedDid = () => {
    const { didInfo } = useDIDInfo();
    const medias = ["/Images/tel.svg", "/Images/x.svg", "/Images/mail.svg", "/Images/discord.svg", "/Images/email.svg"]
    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center pt-[10%] overflow-hidden px-[6%] gap-4'>
            <div className='flex flex-row gap-2 items-center'>
                <p className='flex paytone text-[28px] font-normal text-white'>Data</p>
                <p className='flex paytone text-[28px] font-normal text-[#05F292]'> DID</p>
            </div>

            <div className='w-full '>
                <div>
                    <div className='w-full card h-[225px] flex flex-col justify-between p-4 relative'>
                        <div className='flex flex-col'>
                            <p className='text-white font-bold phetsarath2 text-[33px]'>Data DID</p>
                            <div className='flex flex-row items-center gap-1'>
                                {
                                    medias.map((item, index) => (
                                        <img key={index} src={item} width={25.54} height={25.54} alt='' />
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <div className='w-full justify-between flex relative'>
                                <p className='text-[8px] w-[70%] text-white'>SELF-MANAGE DIGITAL IDENTITY AND PROTECT PRIVACY. OWN, MANAGE, AND MONETIZE YOUR DATA.</p>
                                <img src={"/Images/did.svg"} width={98.75} className='rotate-[-8.6] absolute right-0 bottom-[-20px]' height={98.75} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='px-3 w-full mt-11 flex flex-col gap-4'>
                        <div className='flex flex-col gap-6 w-full'>
                            <p className='text-[18px] font-bold paytone text-white'>NO.{didInfo.number}</p>
                            <p className='text-[#C3C3C3] w-[70%]'>Did:memo:{didInfo.did}</p>
                        </div>
                        {/* <Link href={"/dashboard/create"} className='bg-[#05F292] rounded-[38px] flex items-center justify-center font-bold text-black h-[42px]'>Ok</Link> */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CreatedDid