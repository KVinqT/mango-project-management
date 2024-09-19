import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card/Card";
import { Badge } from "../badge/Badge";
import NestedMeetingBox from "./NestedMeetingBox";

const MyMeetingsBox = () => {
  return (
    <Card className="rounded-3xl bg-[#EEEEEC] mt-2 ">
      <CardHeader className="h-[60px]">
        <CardTitle className="flex justify-between">
          <p className="archivo-font text-lg">Meetings</p>
          <Badge variant="secondary" className="archivo-font cursor-pointer">
            See All
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <NestedMeetingBox />
      </CardContent>
    </Card>
  );
};

export default MyMeetingsBox;
