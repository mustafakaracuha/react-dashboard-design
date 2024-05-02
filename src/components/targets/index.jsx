import React from "react";

import Avatar from "@mui/material/Avatar";

import LinearProgress from "@mui/material/LinearProgress";
import { IoIosArrowForward } from "react-icons/io";

function index() {
    return (
        <div className="w-[350px] h-screen flex flex-col items-start justify-start pt-20">
            <div className="w-full flex flex-col items-start pt-5 px-7 justify-start h-[20rem] bg-white rounded-xl">
                <p className="text-lg font-bold text-gray-600">Targets</p>

                <div className="w-full h-20 mt-10 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between">
                        <p className="font-bold text-sm text-gray-500">Views</p>
                        <p className="font-bold text-sm text-gray-500">75%</p>
                    </div>
                    <div className="w-full mt-3">
                        <LinearProgress
                            variant="indeterminate"
                            sx={{ height: 9, borderRadius: 20, backgroundColor: "#BFCFFF", "& .MuiLinearProgress-bar": { backgroundColor: "#2862FF" } }}
                            value={75}
                        />
                    </div>
                </div>

                <div className="w-full h-20 mt-0 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between">
                        <p className="font-bold text-sm text-gray-500">Followers</p>
                        <p className="font-bold text-sm text-gray-500">50%</p>
                    </div>
                    <div className="w-full mt-3">
                        <LinearProgress
                            variant="indeterminate"
                            sx={{ height: 9, borderRadius: 20, backgroundColor: "#FFEDB3", "& .MuiLinearProgress-bar": { backgroundColor: "#FFC303" } }}
                            value={50}
                        />
                    </div>
                </div>

                <div className="w-full h-20 mt-0 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between">
                        <p className="font-bold text-sm text-gray-500">Income</p>
                        <p className="font-bold text-sm text-gray-500">25%</p>
                    </div>
                    <div className="w-full mt-3">
                        <LinearProgress
                            variant="indeterminate"
                            sx={{ height: 9, borderRadius: 20, backgroundColor: "#FFC5B3", "& .MuiLinearProgress-bar": { backgroundColor: "#FF3D00" } }}
                            value={25}
                        />
                    </div>
                </div>
            </div>

            <p className="mt-8 text-lg font-bold text-gray-600">Meetings</p>
            <div className="w-full flex items-center mt-4 justify-between h-20 bg-white rounded-xl px-5">
                <div className="flex items-center">
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/18398366/pexels-photo-18398366/free-photo-of-bireysel-cekim-kizi.jpeg?auto=compress&cs=tinysrgb&w=800" />
                    <div className="flex flex-col">
                        <p className="font-bold text-sm ml-4 text-slate-500">Emmy Anderson</p>
                        <p className="font-normal text-sm ml-4 text-slate-400">08:00 - 10:00</p>
                    </div>
                </div>
                <div>
                    <IoIosArrowForward size={20} className="text-green-500" />
                </div>
            </div>

            <div className="w-full flex items-center mt-4 justify-between h-20 bg-white rounded-xl px-5">
                <div className="flex items-center">
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/14749665/pexels-photo-14749665.jpeg?auto=compress&cs=tinysrgb&w=800" />
                    <div className="flex flex-col">
                        <p className="font-bold text-sm ml-4 text-slate-500">Mara Dach</p>
                        <p className="font-normal text-sm ml-4 text-slate-400">11:00 - 12:00</p>
                    </div>
                </div>
                <div>
                    <IoIosArrowForward size={20} className="text-green-500" />
                </div>
            </div>

            <div className="w-full flex items-center mt-4 justify-between h-20 bg-white rounded-xl px-5">
                <div className="flex items-center">
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" />
                    <div className="flex flex-col">
                        <p className="font-bold text-sm ml-4 text-slate-500">Joy McGlynn</p>
                        <p className="font-normal text-sm ml-4 text-slate-400">14:00 - 15:00</p>
                    </div>
                </div>
                <div>
                    <IoIosArrowForward size={20} className="text-green-500" />
                </div>
            </div>
        </div>
    );
}

export default index;
