// import Image from "next/image";
// import Link from "next/link";
// import ConnectWallet from "./components/connect/connect";
import { Link } from 'react-router-dom';
// import "./App.css";

const Start = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg relative ">
      <img src={"/Images/token.svg"} className="absolute top-0 left-0" width={149.58} height={204.3} alt="" />
      <img src={"/Images/ellipse.svg"} className="absolute top-0 right-0" width={447} height={666} alt="" />
      <div className="flex flex-col gap-2 items-center z-[600]">
        <div className="flex flex-row items-center gap-2">
          <p className="text-white font-semibold">mini app</p>
          <img src={"/Images/verified.svg"} width={11} height={11} alt="" />
        </div>
        <p className="text-[44px] font-normal paytone text-white text-center leading-normal">Welcome to <br /> <span className="text-[#05F292]">CARV</span> Protocol</p>
        <p className="text-white phetsarath">Earn, Share, and Build with Carv!</p>
        <div className="mt-5">
          <Link to="/navigation" className="w-[155px] h-[42px] rounded-[37px] bg-[#05F292] py-[9px] px-[20px] flex items-center gap-2 z-[500]">
            <div className="w-[25px] h-[25px] rounded-full bg-white items-center justify-center flex">
              <img src={"/Images/arrow.svg"} width={11.67} height={13.33} alt="" />
            </div>
            <p className="text-black phetsarath2 font-bold">Get Started</p>
          </Link>
        </div>
      </div>
      <img src={"/Images/m.svg"} className="absolute bottom-0 left-0" width={300.31} height={300.31} alt="" />
    </div>
  );
}

export default Start