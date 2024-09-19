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
    <div className="h-[95%] flex flex-col justify-around fixed items-center rounded-2xl ml-10 mt-4 border shadow-lg">
      <div className="h-[95%] flex justify-between flex-col items-center p-3">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/Mango.png"
            width={35}
            height={35}
            alt="Logo of the mango org"
          />{" "}
          <div className="mt-14 flex flex-col justify-center items-center cursor-pointer gap-6">
            <div className="rounded-full hover:bg-[#e9e8e8] hover:transition-transform duration-300 ease-linear">
              <LayoutGrid size={20} className="m-2" />
            </div>
            <div className="rounded-full hover:bg-[#e9e8e8] hover:transition-transform duration-300 ease-linear">
              <CirclePlus size={20} className="m-2" />
            </div>
            <div className="rounded-full hover:bg-[#e9e8e8] hover:transition-transform duration-300 ease-linear">
              <Send size={20} className="m-2" />
            </div>
            <div className="rounded-full hover:bg-[#e9e8e8] hover:transition-transform duration-300 ease-linear">
              <UsersRound size={20} className="m-2" />
            </div>
            <div className="rounded-full hover:bg-[#e9e8e8] hover:transition-transform duration-300 ease-linear">
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
