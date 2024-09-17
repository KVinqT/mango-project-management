"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import Link from "next/link";
import { LoginButton, RegisterButton, GoogleOAuthButton } from "../buttons";
import { ConfirmPasswordInput, EmailInput, PasswordInput } from "../input";
import { LoginCredentials, RegisterCredentials } from "@/model";

const AuthCard = ({ type }: { type: string }) => {
  const [isValidFormatEmail, setIsValidFormatEmail] = useState<boolean>(true);
  const [isValidFormatPassword, setIsValidFormatPassword] =
    useState<boolean>(true);
  const [isValidFormatConfirmPassword, setIsValidFormatConfirmPassword] =
    useState<boolean>(true);
  const [loginUserCredentials, setLoginUserCredentials] =
    useState<LoginCredentials>({
      password: "",
    });
  const [registerUserCredentials, setRegisterUserCredentials] =
    useState<RegisterCredentials>({
      email: "",
      password: "",
      confirmPassword: "",
    });

  //set setter functions
  const setLoginPasswordCredential = (password: string) => {
    setLoginUserCredentials({ ...loginUserCredentials, password });
  };
  const setRegisterEmailCredential = (email: string) => {
    setRegisterUserCredentials({ ...registerUserCredentials, email });
  };
  const setRegisterPasswordCredential = (password: string) => {
    setRegisterUserCredentials({ ...registerUserCredentials, password });
  };
  const setConfirmPasswordCredential = (confirmPassword: string) => {
    setRegisterUserCredentials({ ...registerUserCredentials, confirmPassword });
  };

  //valid fomat functions
  const setValidEmailStatus = (bool: boolean) => {
    setIsValidFormatEmail(bool);
  };
  const setValidPasswordStatus = (bool: boolean) => {
    setIsValidFormatPassword(bool);
  };
  const setValidConfirmPasswordStatus = (bool: boolean) => {
    setIsValidFormatConfirmPassword(bool);
  };
  return (
    <>
      <Card className="min-w-[30%] m-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center">
            <Image src="/Mango.png" width={50} height={50} alt="Mango logo" />{" "}
          </div>
          <CardTitle className="raleway-font">
            {type === "login" ? "Log in to continue" : "Please register"}
          </CardTitle>
          <CardDescription className="archivo-font">
            {type === "login"
              ? " Please login to you account!"
              : "Register for an account!"}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-3">
          {type === "register" && (
            <EmailInput onSendData={setRegisterEmailCredential} />
          )}
          {isValidFormatEmail === false && (
            <span className="text-sm text-red-400">Invalid email format!</span>
          )}
          <PasswordInput
            onSendData={
              type === "login"
                ? setLoginPasswordCredential
                : setRegisterPasswordCredential
            }
          />
          {type === "register" && isValidFormatPassword === false && (
            <span className="text-sm text-red-400">
              Password is not strong enough!
            </span>
          )}
          {type === "login" && isValidFormatPassword === false && (
            <span className="text-sm text-red-400">Incorrect password!</span>
          )}
          {type === "register" && (
            <>
              <ConfirmPasswordInput onSendData={setConfirmPasswordCredential} />
              {isValidFormatConfirmPassword === false && (
                <span className="text-sm text-red-400">
                  Must be the same with password!
                </span>
              )}
            </>
          )}
          {type === "login" && (
            <p className="archivo-font text-sm mt-3 cursor-pointer hover:underline">
              Forget password?
            </p>
          )}
          {type === "login" ? (
            <LoginButton
              credentialData={loginUserCredentials}
              onSendPasswordStatus={setValidPasswordStatus}
              isFieldEmpty={loginUserCredentials.password === "" ? true : false}
            />
          ) : (
            <RegisterButton
              credentialData={registerUserCredentials}
              onSendEmailStatus={setValidEmailStatus}
              onSendPasswordStatus={setValidPasswordStatus}
              onSendConfirmPasswordStatus={setValidConfirmPasswordStatus}
              isFieldEmpty={
                registerUserCredentials.email === "" ||
                registerUserCredentials.password === "" ||
                registerUserCredentials.confirmPassword === ""
                  ? true
                  : false
              }
            />
          )}
          {type === "login" && (
            <>
              <p className="mt-7 archivo-font text-center font-medium">
                Or continue with -
              </p>
              <GoogleOAuthButton />
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          {type === "login" ? (
            <Link href="/register" replace className="archivo-font text-black">
              <p className="archivo-font text-sm cursor-pointer hover:underline">
                Don't have a mango account? Register
              </p>{" "}
            </Link>
          ) : (
            <Link href="/login" replace className="archivo-font text-black">
              <p className="archivo-font text-sm cursor-pointer hover:underline">
                Already have a mango account? Log in
              </p>{" "}
            </Link>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default AuthCard;
