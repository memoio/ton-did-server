"use client";
// import Image from "next/image";
import React, { FC, MouseEventHandler } from "react";

interface GeneralModalProps {
    handleClose: MouseEventHandler<HTMLDivElement>;

}

const GeneralModal: FC<GeneralModalProps> = ({

    handleClose,
}) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-[5000] modal-overlay w-full overflow-y-scroll backdrop-blur`}
        >
            <div
                onClick={handleClose}
                className={`modal bg-black bg-opacity-40 fixed inset-0 flex items-center justify-center`}
            >
                <div
                    className={`modal-content card h-[85px] w-[90%]  rounded-3xl overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
                >
                    <div className="py-6  flex flex-col gap-1 items-center justify-center px-3 text-[var(--faded-text)] overflow-y-auto">
                        <img className="rotate" src={"/Images/loading.svg"} width={24} height={24} alt="" />
                        <p className="phetsarath font-normal text-white">DID is being created...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralModal;
