import { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";
import { useRefer } from "../../context/ReferContext";
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../config/config";

export default function Invite() {
    const navigate = useNavigate();
    const { userInfo, setBindWallet } = useAuth();
    const { referCode } = useRefer();
    const [values, setValues] = useState(Array(6).fill("")); // Separate state for each input
    const [success, setSuccess] = useState(false); // State for success popup

    useEffect(() => {
        if (referCode.length === 6) {
            console.log("referralCode", referCode);
            setValues(referCode.split(''));
        }
    }, [referCode])


    const handleChange = (index: number, value: string) => {
        // if (/^\d?$/.test(value)) {
        const newValues = [...values];
        newValues[index] = value; // Update only the specific index
        setValues(newValues);

        // Automatically focus the next input if a number is entered
        if (value && index < values.length - 1) {
            document.getElementById(`input-${index + 1}`)?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        const pasteData = e.clipboardData.getData("text").slice(0, 6); // Get only first 6 characters
        // if (/^\d+$/.test(pasteData)) {
        const newValues = pasteData.split("").slice(0, 6); // Split pasted numbers
        setValues(newValues);

        // Automatically focus the last filled input
        const lastFilledIndex = newValues.length - 1;
        if (lastFilledIndex < values.length) {
            document.getElementById(`input-${lastFilledIndex}`)?.focus();
        }
    };

    const handleClick = async () => {
        try {
            if (userInfo === null) {
                setBindWallet()
            }
            const inviteCode = values.join("");
            if (inviteCode.length !== 6) {
                alert("Please enter a valid invite code.");
                return;
            }
            const respond = await axios.post(API_URL.AIRDROP_INVITE_BIND, {
                "inviteCode": inviteCode,
                // "projectId": 601
            }, {
                headers: {
                    "accept": "application/hal+json",
                    "Content-Type": "application/json",
                    "uid": userInfo?.uid,
                    "token": userInfo?.token
                }
            });
            if (respond.status == 200) {
                if (respond.data.result == 1) {
                    setSuccess(true);
                    console.log(respond.data.data);
                } else {
                    alert(respond.data.message);
                }
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[80%] lg:w-[50%] mt-[100px] px-[30px] pt-[20px] pb-[30px] mx-auto bg-gradient-to-bl from-[#061B13] to-[#064E33] rounded-lg">
                <div className="text-[24px] sm:text-[34px] font-bold bg-gradient-to-r from-[#05F292] to-[#214177] text-transparent bg-clip-text text-center mt-[50px]">
                    Early Access Airdrop
                </div>
                <div className="text-white text-center mt-[10px]">
                    Enter your invite code to claim your airdrop
                </div>
                <div className="flex justify-center gap-[10px] mt-[20px]" onPaste={handlePaste}>
                    {values.map((value, index) => (
                        <input
                            key={index}
                            id={`input-${index}`}
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
                            maxLength={1} // Limit the length to 1 character
                            className="flex w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] text-center text-[24px] border border-gray-300 rounded-md"
                        />
                    ))}
                </div>
                <div className="bg-[#05F292] flex justify-center items-center rounded-full px-4 py-2 mt-5 shadow-md transform hover:scale-110 transition-transform duration-300">
                    <span className="font-bold text-[14px] sm:text-[16px] text-white cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                        }}
                    >
                        Enter invite code
                    </span>
                </div>
                <div className="text-white text-center mt-[10px]">No invitation code? <span className="cursor-pointer underline" onClick={() => { navigate('/dashboard'); }}>Skip</span></div>

                {/* Success Popup */}
                {success && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[300px] text-center">
                            <h2 className="text-2xl font-bold text-green-500">Success!</h2>
                            <p className="mt-2 text-gray-700">You have entered the correct code.</p>
                            <button
                                onClick={() => { setSuccess(false); navigate('/dashboard'); }}
                                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
