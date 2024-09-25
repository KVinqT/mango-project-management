import React from "react";
import { Card, CardContent, CardTitle } from "../card/Card";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar/Avatar";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "../badge/Badge";

const NestedProjectBox = () => {
  return (
    <Card className="rounded-3xl mt-2 hover:border-black">
      <CardContent className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-3">
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
            <div className="flex justify-between items-center mt-3">
              <Badge
                variant="secondary"
                className="archivo-font text-xs w-[75px]"
              >
                2 months
              </Badge>
              <p className="archivo-font text-xs font-semibold ">
                ( 10 ) members
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NestedProjectBox;
