import SideNavBar from "@/components/side-nav-bar/SideNavBar";
import {
  MyMeetingsBox,
  MyProjectsBox,
  MyTasksBox,
  TaskBox,
} from "@/components/box";
import React from "react";
import { taskCardData } from "../../data";
import { PersonalChart } from "@/components/chart";

const WorkSpace = () => {
  return (
    <div className="relative">
      <SideNavBar />
      <div className="flex lg:justify-end w-full">
        <div className="w-[92%] sm:w-[95%] lg:w-[90%] mt-6 sm:mt-28 m-auto lg:m-0">
          {/* task card */}
          <div className="max-w-full overflow-hidden">
            <div className="flex sm:justify-around lg:justify-between lg:mr-4 sm:flex-wrap gap-5 sm:gap-0 sm:m-auto overflow-scroll sm:overflow-hidden">
              {taskCardData.map((t) => (
                <TaskBox task={t} key={t.type} />
              ))}
            </div>
          </div>
          {/* dashboard */}
          <div className="mt-6 flex flex-wrap justify-center sm:flex-wrap-reverse lg:flex-nowrap w-full">
            <PersonalChart />
            <div className="lg:ml-4 min-w-[60%] sm:w-full">
              <div className="mt-6 sm:mt-0 sm:flex sm:flex-row flex flex-col">
                <MyTasksBox />
                <div className="mt-6 sm:mt-0 sm:ml-4 sm:w-[50%] lg:mr-4">
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
