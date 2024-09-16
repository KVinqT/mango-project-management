import React from "react";
import { Button } from "./Button";
import { RegisterCredentials } from "@/model";
import { useRouter } from "next/navigation";

const RegisterButton = ({
  credentialData,
  onSendEmailStatus,
  onSendPasswordStatus,
  onSendConfirmPasswordStatus,
  isFieldEmpty,
}: {
  credentialData: RegisterCredentials;
  onSendEmailStatus: (bool: boolean) => void;
  onSendPasswordStatus: (bool: boolean) => void;
  onSendConfirmPasswordStatus: (bool: boolean) => void;
  isFieldEmpty: boolean;
}) => {
  const router = useRouter();
  router.prefetch("/create-account");
  const emailPattern = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
  );
  const passwordPattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
  );
  const handleRegister = () => {
    if (emailPattern.test(credentialData.email)) {
      onSendEmailStatus(true);
    } else {
      onSendEmailStatus(false);
    }
    if (passwordPattern.test(credentialData.password)) {
      onSendPasswordStatus(true);
    } else {
      onSendPasswordStatus(false);
    }
    credentialData.password.toLowerCase() ===
    credentialData.confirmPassword.toLowerCase()
      ? onSendConfirmPasswordStatus(true)
      : onSendConfirmPasswordStatus(false);

    //redirecting to new create account page
    router.push("/create-account");
  };
  return (
    <>
      <Button
        className="mt-5 w-full bg-[#FFC53D] hover:bg-[#FFC53D]/70 cursor-pointer archivo-font text-black"
        onClick={handleRegister}
        disabled={isFieldEmpty}
      >
        Register
      </Button>
    </>
  );
};

export default RegisterButton;
