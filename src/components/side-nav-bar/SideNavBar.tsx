import React from "react";
import Image from "next/image";
import { LayoutGrid } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Send } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar/Avatar";

const SideNavBar = () => {
  return (
    <div
      className="hidden sm:flex lg:h-[95%] sm:w-[65%] lg:w-[70px] sm:fixed justify-around items-center rounded-2xl lg:ml-6 xl:ml-10 mt-4 border shadow-md 
    sm:top-1/1 sm:left-1/2 sm:transform sm:-translate-x-1/2 lg:top-auto lg:left-auto lg:transform-none bg-gradient-to-b from-white/80 to-transparent backdrop-blur-lg"
    >
      <div className="h-full flex justify-between lg:flex-col items-center sm:p-2 lg:p-3 sm:w-[95%] lg:w-full">
        <div className="flex lg:flex-col justify-center items-center">
          <Image
            src="/Mango.png"
            width={35}
            height={35}
            alt="Logo of the mango org"
          />{" "}
          <div className="lg:mt-14 sm:ml-5 lg:ml-0 flex lg:flex-col justify-center items-center cursor-pointer gap-6">
            <div className="rounded-full hover:bg-[#f1f1f1] hover:transition-transform duration-300 ease-linear">
              <LayoutGrid size={20} className="m-2" />
            </div>
            <div className="rounded-full hover:bg-[#f1f1f1] hover:transition-transform duration-300 ease-linear">
              <CirclePlus size={20} className="m-2" />
            </div>
            <div className="rounded-full hover:bg-[#f1f1f1] hover:transition-transform duration-300 ease-linear">
              <Send size={20} className="m-2" />
            </div>
            <div className="rounded-full hover:bg-[#f1f1f1] hover:transition-transform duration-300 ease-linear">
              <UsersRound size={20} className="m-2" />
            </div>
            <div className="rounded-full hover:bg-[#f1f1f1] hover:transition-transform duration-300 ease-linear">
              <Bell size={20} className="m-2" />
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
