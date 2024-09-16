"use client";
import React, { useState } from "react";
import { Input } from "./Input";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

const ConfirmPasswordInput = ({
  onSendData,
}: {
  onSendData: (confirmPassword: string) => void;
}) => {
  const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false);
  return (
    <div className="mt-4">
      <p className="archivo-font font-semibold">Confirm password</p>
      <div className="flex items-center relative">
        <Input
          className="mt-3"
          type={isOpenPassword ? "text" : "password"}
          onChange={(evt) => onSendData(evt.target.value)}
          placeholder="Confirm your password"
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

export default ConfirmPasswordInput;
