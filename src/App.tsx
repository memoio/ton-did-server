import { useRefer } from './context/ReferContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import "./App.css";

const Start = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setCode } = useRefer();

  const referralCode = searchParams.get('referralCode');

  const handleStart = () => {
    if (referralCode && referralCode?.length === 6) {
      setCode(referralCode);
    }

    console.log(referralCode);

    navigate("/navigation");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg relative ">
      <img src={"/Images/token.svg"} className="absolute top-0 left-0" width={149.58} height={204.3} alt="" />
      <img src={"/Images/ellipse.svg"} className="absolute top-0 right-0" width={447} height={666} alt="" />
      <div className="flex flex-col gap-2 items-center z-[600]">
        <div className="flex flex-row items-center gap-2">
          <p className="text-white font-semibold">mini app</p>
          <img src={"/Images/verified.svg"} width={11} height={11} alt="" />
        </div>

        <p className="praise-regular font-normal text-[43px] leading-[42px] tracking-[0%] capitalize">Welcome to</p>
        <p className="nunito-regular font-black text-[30px] leading-[41px] tracking-[0%] capitalize"> <span className="text-[#05F292]">MEMO</span> Protocol</p>

        <p className="text-white phetsarath">Earn, Share, and Build with MEMO!</p>
        <div className="mt-5">
          <button className="w-[200px] h-[50px] rounded-[37px] bg-[#05F292] py-[9px] px-[20px] rounded-[25px] shadow-[0px_4px_36.5px_0px_rgba(255,255,255,0.25)] flex items-center justify-center text-white font-phetsarath font-normal text-[16px] leading-[33px] tracking-[0%] text-center capitalize" onClick={handleStart}>
            <p className="text-white phetsarath2 font-bold">Get Started</p>
          </button>

        </div>
      </div>
    </div >

  );
}

export default Start