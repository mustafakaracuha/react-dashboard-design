import React from "react";

import { MdHomeFilled, MdSpaceDashboard, MdOutlineHelp } from "react-icons/md";
import { FaUser, FaUsers, FaRegCalendarAlt, FaProjectDiagram } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";

function index() {
    return (
        <aside className="w-72 h-screen bg-white flex flex-col">
            <div className="w-full h-20 flex items-center pl-10 flex-2">
                <p className=" font-sans font-bold text-[1.8rem] text-slate-400">
                    Dashboard
                </p>
            </div>

            <div className="w-full px-5 flex-1">
                <ul>
                    <li className="h-14 flex items-center justify-start pl-5 rounded-xl gap-5 transition-all duration-300 hover:bg-[#ECEFF1] cursor-pointer">
                        <MdHomeFilled size={20} className="text-slate-600" />
                        <p className="text-slate-500 mt-1">Home</p>
                    </li>
                    <li className="h-14 flex items-center justify-start pl-5 rounded-xl gap-5 transition-all duration-300 hover:bg-[#ECEFF1] cursor-pointer">
                        <MdSpaceDashboard size={20} className="text-slate-600" />
                        <p className="text-slate-500 mt-1">Dashboard</p>
                    </li>
                    <li className="h-14 flex items-center justify-start pl-5 rounded-xl gap-5 transition-all duration-300 hover:bg-[#ECEFF1] cursor-pointer">
                        <FaUsers size={20} className="text-slate-600" />
                        <p className="text-slate-500 mt-1">Users</p>
                    </li>
                    <li className="h-14 flex items-center justify-start pl-5 rounded-xl gap-5 transition-all duration-300 hover:bg-[#ECEFF1] cursor-pointer">
                        <FaRegCalendarAlt size={20} className="text-slate-600" />
                        <p className="text-slate-500 mt-1">Calendar</p>
                    </li>
                    <li className="h-14 flex items-center justify-start pl-5 rounded-xl gap-5 transition-all duration-300 hover:bg-[#ECEFF1] cursor-pointer">
                        <FaProjectDiagram size={20} className="text-slate-600" />
                        <p className="text-slate-500 mt-1">Project</p>
                    </li>
                    <li className="h-14 flex items-center justify-start pl-5 rounded-xl gap-5 transition-all duration-300 hover:bg-[#ECEFF1] cursor-pointer">
                        <MdOutlineHelp size={22} className="text-slate-600" />
                        <p className="text-slate-500 mt-1">Help</p>
                    </li>
                </ul>
            </div>

            <div className="w-full px-9 flex-1 flex items-end justify-start pb-10">
                <div className="w-full flex flex-col">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ECEFF1]">
                            <FaUser size={16} className="text-slate-600" />
                        </div>
                        <p className="text-slate-500">Mustafa Karaçuha</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5 cursor-pointer">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ECEFF1]">
                            <RiSettings3Fill size={19} className="text-slate-600" />
                        </div>
                        <p className="text-slate-500">Settings</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default index;
