import SideNavBar from "@/components/side-nav-bar/SideNavBar";
import {
  MyMeetingsBox,
  MyProjectsBox,
  MyTasksBox,
  TaskBox,
} from "@/components/box";
import React from "react";
import { taskCardTypes } from "../../data";
import { PersonalChart } from "@/components/chart";

const WorkSpace = () => {
  return (
    <div className="relative">
      <SideNavBar />
      <div className="flex justify-end">
        <div className="w-[90%] mt-4">
          {/* task card */}
          <div className="flex justify-between mr-4 flex-wrap">
            {taskCardTypes.map((t) => (
              <TaskBox task={t} />
            ))}
          </div>
          {/* dashboard */}
          <div className="mt-4 flex w-full">
            <PersonalChart />
            <div className="ml-4 w-[65%]">
              <div className="flex">
                <MyTasksBox />
                <div className="ml-4 w-[50%] mr-4">
                  <div className="flex flex-col">
                    <MyProjectsBox />
                    <MyMeetingsBox />
                  </div>
                </div>
              </div>
              {/* my meetings */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
