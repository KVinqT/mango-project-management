import { AuthCard } from "@/components/card";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <AuthCard type="login" />
      </div>
    </>
  );
};

export default Login;
