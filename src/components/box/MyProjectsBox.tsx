import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card/Card";
import { Badge } from "../badge/Badge";
import NestedProjectBox from "./NestedProjectBox";

const MyProjectsBox = () => {
  return (
    <Card className="rounded-3xl bg-[#EEEEEC] xl:min-w-[300px]">
      <CardHeader className="h-[60px]">
        <CardTitle className="flex justify-between">
          <p className="archivo-font text-lg">My Projects</p>
          <Badge variant="secondary" className="archivo-font cursor-pointer">
            See All
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <NestedProjectBox />
      </CardContent>
    </Card>
  );
};

export default MyProjectsBox;
