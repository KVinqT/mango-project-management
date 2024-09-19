"use client";
import { useRef } from "react";
import { Input } from "./Input";

const EmailInput = ({
  onSendData,
}: {
  onSendData: (email: string) => void;
}) => {
  const inputRef = useRef(null);
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
