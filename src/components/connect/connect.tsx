// import React from 'react'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

const ConnectWallet = () => {
    const address = useTonAddress();
    const navigate = useNavigate();

    useEffect(() => {
        // 监听myVariable的变化
        console.log(address)
        if (address != "") {
            // 当myVariable为true时，触发页面跳转
            navigate('/dashboard');
        }
    }, [address]);

    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center justify-center'>
            <div className='w-[345px] h-[375px] border-2 border-[#05F292] rounded-[15px] relative flex flex-col items-center justify-center'>
                <div className='bg-black w-[116px] flex items-center justify-center h-[116px] rounded-full absolute top-[-60px]'>
                    <img src={"/Images/wallet.svg"} className="" width={86} height={86} alt="" />
                </div>
                <div className='w-full h-[225px] justify-between flex flex-col items-center px-5'>
                    <p className='text-[32px] paytone text-white text-center'>Connect your <br /> <span className='text-[#05F292]'>Wallet</span></p>
                    <p className='text-white phetsarath text-center text-[16px] '>Connect your Ton wallet to create your unique CARV Identity</p>
                    <button id='ton-connect' className="w-[180px] h-[42px] rounded-[37px] bg-[#05F292] py-[9px] px-[20px] flex items-center gap-2 z-[500]">
                        <div className="w-[25px] h-[25px] rounded-full bg-white items-center justify-center flex">
                            <img src={"/Images/arrow.svg"} width={11.67} height={13.33} alt="" />
                        </div>
                        <div>
                            <TonConnectButton />
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ConnectWallet