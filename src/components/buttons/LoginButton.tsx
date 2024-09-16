import React from "react";
import { Button } from "./Button";
import { LoginCredentials } from "@/model";

const LoginButton = ({
  credentialData,
  isFieldEmpty,
  onSendPasswordStatus,
}: {
  credentialData: LoginCredentials;
  isFieldEmpty: boolean;
  onSendPasswordStatus: (bool: boolean) => void;
}) => {
  const handleLogin = () => {
    //if password stored in the database is not the same as the password input
    //onSendPasswordStatus --> false
  };

  return (
    <>
      <Button
        className="mt-5 w-full bg-[#FFC53D] hover:bg-[#FFC53D]/70 cursor-pointer archivo-font text-black"
        onClick={handleLogin}
        disabled={isFieldEmpty}
      >
        Login
      </Button>
    </>
  );
};

export default LoginButton;
