import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center pt-[3%] px-[7%]'>Create-did
            <div className='w-full flex flex-col items-center z-[500] gap-4'>
                <img src={"/Images/create-did.svg"} className="" width={302.13} height={203.13} alt="" />
                <div className='flex flex-col gap-4'>
                    <p className='text-center text-[11px] text-white'>MEMO will be hosting a long term points program where users can earn points rewards for completing simple tasks. Activities include joint partner draws, OAT qualification, NFT rewards and more. This campaign will run until the official opening of MEMO Airheads, so please take the time to participate.</p>
                    <p className='text-center text-[11px] text-white'>Note: All addresses participating in the activity will be rewarded with different percentages of points, and the details of the points can be viewed in the MEMO Points platform. Points will be used for future MEMO Airheads vouchers, and the more points you have, the more Airheads you will have.</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <Link to="/connect" className='w-full h-[42px] rounded-[38px] bg-[#05F292] flex items-center justify-center'>
                        <p className='phetsarath2 text-[15px] text-black'>Create DID</p>
                    </Link>
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <button className='w-full h-[42px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                            <p className='phetsarath2 text-[15px] text-black'>Check In</p>
                            <div className="w-[18px] h-[18px] rounded-full bg-white items-center justify-center flex">
                                <img src={"/Images/arrow.svg"} width={8.4} height={9.6} alt="" />
                            </div>
                        </button>
                        <button className='w-full h-[42px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
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
                        </button>
                        <button className='w-full h-[42px] rounded-[38px] bg-[#05F292] flex items-center justify-center flex-row gap-2'>
                            <p className='phetsarath2 text-[15px] text-black'>Profile</p>
                            <div className="w-[18px] h-[18px] rounded-full bg-white items-center justify-center flex">
                                <img src={"/Images/arrow.svg"} width={8.4} height={9.6} alt="" />
                            </div>
                        </button>

                    </div>
                </div>
            </div>

            <img src={"/Images/m.svg"} className="absolute bottom-0 left-0 w-full" width={350.31} height={330.31} alt="" />
        </div >
    )
}

export default Navigation