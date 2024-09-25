import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card/Card";
import { Badge } from "../badge/Badge";
import NestedTasksBox from "./NestedTaskBox";

const MyTasksBox = () => {
  return (
    <Card className="sm:w-[50%] h-full rounded-3xl bg-[#EEEEEC]">
      <CardHeader className="h-[60px]">
        <CardTitle className="flex justify-between">
          <p className="archivo-font text-lg">My Tasks</p>
          <Badge variant="secondary" className="archivo-font cursor-pointer">
            See All
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <NestedTasksBox />
        <NestedTasksBox />
        <NestedTasksBox />
        <NestedTasksBox />
      </CardContent>
    </Card>
  );
};

export default MyTasksBox;
