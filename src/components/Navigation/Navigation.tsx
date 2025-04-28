import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTonAddress } from '@tonconnect/ui-react';

const Navigation = () => {
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
        <div className='w-full h-[100vh] relative bg flex-col flex items-center pt-[3%] px-[7%]'>
            {/* <img src={"/Images/line1.svg"} className="absolute top-0 left-0" width={50} height={60} alt="" /> */}
            {/* <img src={"/Images/line2.svg"} className="absolute top-0 right-0" width={50} height={60} alt="" /> */}
            <div className='w-full flex flex-col items-center z-[500] gap-4'>
                <img src={"/Images/create-did.svg"} className="" width={302.13} height={203.13} alt="" />
                <div className='flex flex-col gap-4'>
                    <p className='font-normal text-[12px] leading-[19px] text-center capitalize text-white'>MEMO will be hosting a long term points program where users can earn points rewards for completing simple tasks. Activities include joint partner draws, OAT qualification, NFT rewards and more. This campaign will run until the official opening of MEMO Airheads, so please take the time to participate.</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <div className='grid grid-cols-3 gap-2 w-full'>
                        <div className="border border-[#05F292] border-solid rounded-[15px] bg-[#05F2924D]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] flex items-center justify-center gap-x-1'>
                                <div className="rounded-full items-center justify-center flex">
                                    <img src={"/Images/createDID.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='font-normal text-[13px] text-white'>Create DID</p>
                            </Link>
                        </div>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center gap-x-1'>
                                <div className="rounded-full items-center justify-center flex">
                                    <img src={"/Images/checkIn.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='font-normal text-[13px] text-white'>Check In</p>
                            </Link>
                        </div>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center gap-x-1'>
                                <div className="rounded-full items-center justify-center flex">
                                    <img src={"/Images/profile1.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='font-normal text-[13px] text-white'>Profile</p>
                            </Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center gap-x-1'>
                                <div className="rounded-full items-center justify-center flex">
                                    <img src={"/Images/shareTG.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='font-normal text-[13px] text-white'>Share to Telegram</p>
                            </Link>
                        </div>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center gap-x-1'>
                                <div className="rounded-full items-center justify-center flex">
                                    <img src={"/Images/x.png"} width={15} height={15} alt="" />
                                </div>
                                <p className='font-normal text-[13px] text-white'>Share to Twitter</p>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='font-normal text-[12px] leading-[19px] text-center capitalize text-white'><span className="text-[#05F292]">Note:</span> All addresses participating in the activity will be <span className="text-[#05F292]">rewarded with different percentages of points</span>, and the details of the points can be viewed in the <span className="text-[#05F292]">MEMO Points platform</span>. Points will be used for future MEMO Airheads vouchers, and the more points you have, the more Airheads you will have.</p>
                </div>
            </div>

            <img src={"/Images/m.svg"} className="absolute bottom-0 left-0 w-full" width={350.31} height={330.31} alt="" />
        </div >
    )
}

export default Navigation