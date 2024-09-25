"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card/Card";
import {
  LayoutList,
  Hourglass,
  ArrowUpRight,
  AlarmClockOff,
  FolderInput,
} from "lucide-react";

const TaskBox = ({ task }: any) => {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
  const toRenderIcon = () => {
    switch (task.type) {
      case "Priority Tasks":
        return <LayoutList size={20} className="m-2" />;
      case "Pending Tasks":
        return <Hourglass size={20} className="m-2" />;
      case "Overdue Tasks":
        return <AlarmClockOff size={20} className="m-2" />;
      case "Backlog Tasks":
        return <FolderInput size={20} className="m-2" />;
    }
  };
  return (
    <Card
      className="min-w-[220px] sm:w-[290px] lg:w-[225px] xl:w-[280px] rounded-3xl sm:mt-3 lg:mt-4 cursor-pointer hover:border hover:border-black overflow-auto"
      style={{ backgroundColor: task.color }}
    >
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div
            className="rounded-full"
            style={{
              backgroundColor: task.hoverColor,
            }}
          >
            {toRenderIcon()}
          </div>
          <div
            className="rounded-full hover:transition-transform duration-300 ease-linear"
            style={{
              backgroundColor: isMouseHover && task.hoverColor,
            }}
            onMouseEnter={() => setIsMouseHover(true)}
            onMouseLeave={() => setIsMouseHover(false)}
          >
            <ArrowUpRight size={20} className="m-2" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="archivo-font font-medium text-sm">{task.type}</p>
      </CardContent>
      <CardFooter className="h-8">
        <p className="font-bold text-2xl archivo-font">12</p>
      </CardFooter>
    </Card>
  );
};

export default TaskBox;
