import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card/Card";
import Image from "next/image";

const NestedMeetingBox = () => {
  return (
    <Card className="rounded-3xl mt-2 hover:border-black cursor-pointer">
      <CardHeader className="h-[20px]">
        <CardTitle className="flex justify-between">
          <p className="archivo-font text-[15px] font-semibold">
            Database Design Meeting
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className="archivo font-medium text-[14px]">4:30 pm</p>
        <div className="flex items-center">
          <Image src="/zoom.png" width={50} height={50} alt="Zoom logo" />
          <h2 className="archivo text-xs font-bold">Zoom</h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default NestedMeetingBox;
