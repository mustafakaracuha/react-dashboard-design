import React from "react";

import { MdOutlineStarPurple500 } from "react-icons/md";
import welcome from "../../assets/welcome.png";

function index() {
    return (
        <div className="w-[320px] h-screen flex flex-col items-start justify-start pt-[6rem]">
            <div className="w-full h-auto">
                <p className="font-sans text-slate-600 font-medium text-[1.7rem]">Hi Mustafa,</p>
                <p className="font-sans text-slate-500 font-light text-[1.7rem] mt-3">Welcome back !</p>
                <p className="font-sans text-slate-500 font-light leading-7 text-[1rem] mt-5">
                    This page is designed to give some important information about the application. Let's make someting together!
                </p>
            </div>

            <div className="w-full pt-7 mt-2 flex items-start justify-start">
                <img width={500} src={welcome} alt="welcome" />
            </div>

            <div className="w-full h-60 flex flex-col bg-[#2862FF] mt-10 rounded-xl">
                <div className="w-full h-20 flex items-center justify-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        <MdOutlineStarPurple500 size={22} className="text-[#2862FF]" />
                    </div>
                </div>
                <div className="w-full h-20 flex flex-col items-center justify-center px-4">
                    <p className="font-extrabold text-white">Congratulations, Mustafa</p>
                    <p className="font-light text-white mt-4 text-center text-sm">You have complated 75% of your profile. Your current progress is great.</p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="mt-5 text-sm transition-all duration-300 active:scale-110 hover:scale-105  font-bold w-30 flex items-center justify-center rounded-xl h-10 p-4 bg-white">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default index;
