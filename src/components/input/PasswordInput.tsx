"use client";
import React, { useState } from "react";
import { Input } from "./Input";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

const PasswordInput = ({
  onSendData,
}: {
  onSendData: (password: string) => void;
}) => {
  const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false);
  return (
    <div className="mt-4">
      <p className="archivo-font font-semibold">Password</p>
      <div className="flex items-center relative">
        <Input
          className="mt-3"
          relative-align
          type={isOpenPassword ? "text" : "password"}
          onChange={(evt) => onSendData(evt.target.value)}
          placeholder="Enter your password"
        />
        {isOpenPassword ? (
          <EyeClosedIcon
            className="absolute right-5 top-6 cursor-pointer"
            onClick={() => {
              setIsOpenPassword(false);
            }}
          />
        ) : (
          <EyeOpenIcon
            className="absolute right-5 top-6 cursor-pointer"
            onClick={() => {
              setIsOpenPassword(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
