"use client";
import { useEffect, useRef } from "react";
import { Input } from "./Input";
import { useInputRef } from "@/hooks/useInputRef";

const EmailInput = ({
  onSendData,
}: {
  onSendData: (email: string) => void;
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    useInputRef(inputRef);
  });
  return (
    <div>
      <p className="archivo-font font-semibold">Email</p>
      <Input
        className="mt-3"
        type="email"
        placeholder="Enter your email"
        onChange={(evt) => onSendData(evt.target.value)}
        ref={inputRef}
      />
    </div>
  );
};

export default EmailInput;
