// import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import "../../App.css";

const ConnectWallet = () => {
    const address = useTonAddress();
    const navigate = useNavigate();

    useEffect(() => {
        // 监听myVariable的变化
        console.log(address)
        if (address !== "") {
            // 当myVariable为true时，触发页面跳转
            navigate('/refer');
        }
    }, [address]);

    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center justify-center'>
            <img src={"/Images/line1.svg"} className="absolute top-0 left-0" width={93} height={114.5} alt="" />
            <img src={"/Images/line2.svg"} className="absolute top-110 right-0" width={93} height={114.5} alt="" />
            <div className='w-[345px] h-[375px] border-2 border-solid border-[#05F292] rounded-[15px] relative flex flex-col items-center justify-center'>
                <div className='bg-black w-[116px] flex items-center justify-center h-[116px] rounded-full absolute top-[-60px]'>
                    <img src={"/Images/wallet.svg"} className="" width={86} height={86} alt="" />
                </div>
                <div className='w-full h-[225px] justify-between flex flex-col items-center px-5'>
                    <div className='w-full h-[105px] justify-between flex flex-col items-center px-5'>
                        <p className='text-[48px] praise-regular text-white text-center h-[38px]'>Connect</p>
                        <p className='text-[40px] nunito-regular text-[#05F292] text-center'> Your Wallet</p>
                    </div>
                    <p className='text-white phetsarath text-center text-[16px] '>Connect your Ton wallet to create your unique MEMO Identity</p>
                    <TonConnectButton />
                </div>
            </div>

        </div>
    )
}

export default ConnectWallet