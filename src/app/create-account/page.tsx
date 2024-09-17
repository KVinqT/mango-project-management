import { CreateAccountForm } from "@/components/form";
import React from "react";

const CreateAccount = () => {
  return (
    <>
      <div className="mt-[35px] flex justify-center">
        <h2 className="raleway-font font-bold text-xl">
          Create <span className="text-[#FFC53D]">mango</span> user account
        </h2>
      </div>
      <div className="flex justify-center items-center h-[100vh]">
        <CreateAccountForm />
      </div>
    </>
  );
};

export default CreateAccount;
