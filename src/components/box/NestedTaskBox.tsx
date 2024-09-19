import React from "react";
import { Card } from "../card/Card";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar/Avatar";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "../badge/Badge";

const NestedTasksBox = () => {
  return (
    <Card className="rounded-xl mt-2 hover:border hover:border-black">
      <div className="flex m-auto items-center p-3 justify-between">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-3">
            <h1 className="archivo-font font-bold text-sm">
              Writing documents
            </h1>
            <div className="flex items-center underline text-[#0090FF]">
              <ExternalLink size={15} />
              <Link
                href="/project"
                replace
                className="archivo-font text-xs font-semibold ml-1"
              >
                See project
              </Link>
            </div>
          </div>
        </div>
        <Badge variant="outline" className="archivo-font text-xs bg-[#E3F7BA]">
          Completed
        </Badge>
      </div>
    </Card>
  );
};

export default NestedTasksBox;
