'use client';
// import Image from 'next/image';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface Tab {
    img: string;
    actImg: string;
    title: string;
    act: string;
    link: string;
}

const Footer = () => {
    const location = useLocation();

    const tabs: Tab[] = [
        {
            img: "/Images/dashboard.svg",
            actImg: "/Images/dashboardact.svg",
            title: "Dashboard",
            act: "dashboard",
            link: "/dashboard",
        },
        {
            img: "/Images/create.svg",
            actImg: "/Images/createact.svg",
            title: "DID",
            act: "did",
            link: "/dashboard/did",
        },
        {
            img: "/Images/search.svg",
            actImg: "/Images/searchact.svg",
            title: "Check In",
            act: "daily",
            link: "/dashboard/daily",
        },
        {
            img: "/Images/referalact.svg",
            actImg: "/Images/referal.svg",
            title: "Referal",
            act: "referal",
            link: "/dashboard/referal",
        },
        {
            img: "/Images/profile.svg",
            actImg: "/Images/profileact.svg",
            title: "Profile",
            act: "profile",
            link: "/dashboard/profile",
        },
    ];

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='flex flex-row items-center justify-between fixed bottom-1 z-[500] w-[95%] bg-[#032619] px-[4%] py-2 rounded-[21px]'>
                {tabs.map((item, index) => {
                    const isActive = location.pathname === item.link;
                    return (
                        <Link
                            to={item.link}
                            key={index}
                            className={`flex flex-col items-center gap-1 w-[63px] relative ${isActive ? 'active' : ''}`}
                        >
                            {isActive ? (
                                <img src={item.actImg} width={28} height={28} alt='' />
                            ) : (
                                <img src={item.img} width={28} height={28} alt='' />
                            )}
                            <p className={`text-[10px] ${isActive ? 'text-[#05F293]' : 'text-[#8D8D8D]'}`}>
                                {item.title}
                            </p>
                            {isActive && (
                                <div className='absolute bottom-[-8px] w-[53px] h-[3px] rounded-[3px] bg-[#05F292]'></div>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
