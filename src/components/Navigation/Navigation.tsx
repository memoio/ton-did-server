import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center pt-[3%] px-[7%]'>
            <div className='w-full flex flex-col items-center z-[500] gap-4'>
                <img src={"/Images/create-did.svg"} className="" width={302.13} height={203.13} alt="" />
                <div className='flex flex-col gap-4'>
                    <p className='font-normal text-[12px] leading-[19px] text-center capitalize text-white'>MEMO will be hosting a long term points program where users can earn points rewards for completing simple tasks. Activities include joint partner draws, OAT qualification, NFT rewards and more. This campaign will run until the official opening of MEMO Airheads, so please take the time to participate.</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <div className='grid grid-cols-3 gap-2 w-full'>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center'>
                                <div className="rounded-full bg-white items-center justify-center flex">
                                    <img src={"/Images/profile.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='phetsarath2 text-[15px] text-white'>Create DID</p>
                            </Link>
                        </div>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center'>
                                <div className="rounded-full bg-white items-center justify-center flex">
                                    <img src={"/Images/profile.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='phetsarath2 text-[15px] text-white'>Check In</p>
                            </Link>
                        </div>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center'>
                                <div className="rounded-full bg-white items-center justify-center flex">
                                    <img src={"/Images/profile.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='phetsarath2 text-[15px] text-white'>Profile</p>
                            </Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center'>
                                <div className="rounded-full bg-white items-center justify-center flex">
                                    <img src={"/Images/profile.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='phetsarath2 text-[15px] text-white'>Share to Twitter</p>
                            </Link>
                        </div>
                        <div className="border border-[#05F292] border-solid rounded-[15px]">
                            <Link to="/connect" className='w-full h-[42px] rounded-[12px] bg-[#05F2924D] flex items-center justify-center'>
                                <div className="rounded-full bg-white items-center justify-center flex">
                                    <img src={"/Images/profile.svg"} width={15} height={15} alt="" />
                                </div>
                                <p className='phetsarath2 text-[15px] text-white'>Share to Twitter</p>
                            </Link>
                        </div>
                        {/* <button className='w-full h-[42px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                            <p className='phetsarath2 text-[15px] text-black'>Share to Twitter</p>
                            <div className="w-[18px] h-[18px] rounded-full bg-white items-center justify-center flex">
                                <img src={"/Images/arrow.svg"} width={8.4} height={9.6} alt="" />
                            </div>
                        </button>
                        <button className='w-full h-[42px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                            <p className='phetsarath2 text-[15px] text-black'>Share to Telegram</p>
                            <div className="w-[18px] h-[18px] rounded-full bg-white items-center justify-center flex">
                                <img src={"/Images/arrow.svg"} width={8.4} height={9.6} alt="" />
                            </div>
                        </button> */}

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