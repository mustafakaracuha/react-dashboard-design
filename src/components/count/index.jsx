import React from "react";

import { BiSolidLike } from "react-icons/bi";
import { IoMdArrowDropup, IoMdArrowDropright, IoMdArrowDropdown, IoIosArrowForward } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

import { ChartContainer, AreaPlot } from "@mui/x-charts";

function index() {
    const uData = [2000, 3000, 2400, 2780];
    const xLabels = ["Jan", "Feb", "Mar", "Agu"];
    return (
        <div className="w-[350px] h-screen flex flex-col items-start justify-start pt-20">
            <div className="w-full flex items-center justify-between h-20 bg-white rounded-xl px-5">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2862FF]">
                        <BiSolidLike size={20} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-sm ml-4 text-slate-500">26,789</p>
                        <p className="font-normal text-sm ml-4 text-slate-400">Likes</p>
                    </div>
                </div>
                <div>
                    <IoMdArrowDropup size={23} className="text-green-500" />
                </div>
            </div>

            <div className="w-full flex items-center justify-between h-20 bg-white rounded-xl px-5 mt-4">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FF3D00]">
                        <IoHeart size={20} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-sm ml-4 text-slate-500">6,754</p>
                        <p className="font-normal text-sm ml-4 text-slate-400">Love</p>
                    </div>
                </div>
                <div>
                    <IoMdArrowDropright size={23} className="text-slate-400" />
                </div>
            </div>

            <div className="w-full flex items-center justify-between h-20 bg-white rounded-xl px-5 mt-4">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFC303]">
                        <FaSmile size={20} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-sm ml-4 text-slate-500">52,732</p>
                        <p className="font-normal text-sm ml-4 text-slate-400">Smiles</p>
                    </div>
                </div>
                <div>
                    <IoMdArrowDropdown size={23} className="text-[#FF3D00]" />
                </div>
            </div>
            <div className="w-full h-[25rem] flex flex-col items-start justify-start bg-white rounded-xl mt-4 p-7 overflow-hidden">
                <p className="w-full font-medium text-sm text-center text-slate-500">Views</p>
                <p className="w-full font-bold text-2xl text-center text-slate-600 mt-2">6,967.431</p>
                <div className="w-full h-[12rem] overflow-hidden -mt-5">
                    <ChartContainer
                        width={400}
                        height={300}
                        sx={{ marginLeft: "-45px"}}
                        series={[
                            {
                                data: uData,
                                type: "line",
                                label: "uv",
                                area: true,
                                stack: "total",
                            },
                        ]}
                        xAxis={[{ scaleType: "point", data: xLabels }]}
                    >
                        <AreaPlot />
                    </ChartContainer>
                </div>
                <div className="w-full flex items-center justify-between h-20 bg-gray-200 rounded-xl px-5 mt-10">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
                            <MdSpaceDashboard size={20} className="text-gray-600" />
                        </div>
                        <p className="font-semibold text-sm ml-4 text-slate-500">View Dashboard</p>
                    </div>
                    <div>
                        <IoIosArrowForward size={20} className="text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
