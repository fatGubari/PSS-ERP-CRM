import React, { useState } from "react";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { GoNorthStar, GoProjectSymlink } from "react-icons/go";
import { TbReportMoney } from "react-icons/tb";
import { TfiAlarmClock, TfiMenu } from "react-icons/tfi";
import { GrUserAdmin } from "react-icons/gr";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="w-screen h-11 bg-[#f5f4f2] p-2">
        {open ? (
          <AiOutlineClose
            className="bg-zinc-100 text-3xl cursor-pointer p-1 border rounded-md hover:bg-[#e4e3e0]"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <TfiMenu
            className="bg-zinc-100 text-3xl cursor-pointer p-1 border rounded-md hover:bg-[#e4e3e0]"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      <div
        className={`bg-[#f5f4f2] h-screen pt-8 relative duration-300 flex flex-col ${
          open ? "w-64 p-3" : "w-0"
        }`}
      >
        <i
          className={`flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0] ${
            open ? "block" : "hidden"
          }`}
        >
          <AiOutlineHome />
          Home
        </i>
        <i
          className={`flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0] ${
            open ? "block" : "hidden"
          }`}
        >
          <BsPeople />
          Client
        </i>
        <i
          className={`flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0] ${
            open ? "block" : "hidden"
          }`}
        >
          <GoNorthStar />
          Industry
        </i>
        <i
          className={`flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0] ${
            open ? "block" : "hidden"
          }`}
        >
          <GoProjectSymlink />
          Project
        </i>
        <i
          className={`flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0] ${
            open ? "block" : "hidden"
          }`}
        >
          <TbReportMoney />
          Financing Requirements
        </i>
        <i
          className={`flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0] ${
            open ? "block" : "hidden"
          }`}
        >
          <TfiAlarmClock />
          Term
        </i>
        <i
          className={`flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0] ${
            open ? "block" : "hidden"
          }`}
        >
          <GrUserAdmin />
          Administration
        </i>
      </div>
    </div>
  );
}
