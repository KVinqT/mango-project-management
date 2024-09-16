import { Button } from "@/components/buttons/Button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="max-w-[85%] m-auto mb-[150px]">
          <div className="flex justify-between">
            <h1 className="raleway-font text-9xl text-[#FFC53D]">Management</h1>
            <Image
              className="mr-36"
              src="/Mango-logo.png"
              width={100}
              height={200}
              alt="Logo of the mango org"
            />{" "}
          </div>
          <div className="flex justify-end mt-8">
            <h1 className="raleway-font text-9xl">Collaborate</h1>
          </div>
          <div className="flex justify-center items-center mt-8">
            <h1 className="raleway-font text-9xl">Together</h1>
            <div className="flex flex-col">
              <p className="archivo-font text-xl ml-16">
                User can easily browse, organize and management their time with
                efficient. Manage the projects with ease and smooth way.
              </p>
              <Button asChild className="ml-16 mt-5 w-[150px]">
                <Link href="/register" replace className="archivo-font">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
