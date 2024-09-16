import React from "react";
import { Button } from "./Button";
import Image from "next/image";

const GoogleOAuthButton = () => {
  return (
    <>
      <Button className="mt-5 w-full cursor-pointer border bg-white hover:bg-black/10 flex justify-center items-center">
        <Image
          src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/google-logo.5867462c.svg"
          width={25}
          height={25}
          alt="Goolge"
        />
        <p className="ml-3 text-black archivo-font font-semibold">Google</p>
      </Button>
    </>
  );
};

export default GoogleOAuthButton;
