import React from "react";
import { Card } from "../card/Card";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar/Avatar";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "../badge/Badge";

const NestedProjectBox = () => {
  return (
    <Card className="rounded-3xl mt-2 hover:border-black">
      <div className="flex m-auto items-center justify-between p-3">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-3 w-[160px]">
            <h1 className="archivo-font font-bold text-sm">
              Web Design and development Project
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
            <Badge
              variant="secondary"
              className="archivo-font text-xs mt-3 w-[75px]"
            >
              2 months
            </Badge>
          </div>
        </div>
        <div>
          <p className="archivo-font text-xs font-bold mr-2">( 5 ) members</p>
        </div>
      </div>
    </Card>
  );
};

export default NestedProjectBox;
