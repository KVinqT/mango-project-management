import { Button } from "@/components/buttons/Button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="max-w-[85%] m-auto lg:mb-[150px]">
          <div className="flex-col">
            <Image
              className="md:mr-10 xl:mr-36"
              src="/Mango-logo.png"
              width={100}
              height={200}
              alt="Logo of the mango org"
            />
            <h1 className="raleway-font text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FFC53D]">
              Management
            </h1>
          </div>

          <div className="flex justify-end mt-8">
            <h1 className="raleway-font text-5xl sm:text-7xl lg:text-9xl md:text-8xl">
              Collaborate
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-center mt-8">
            <h1 className="raleway-font text-5xl sm:text-7xl lg:text-9xl md:text-8xl">
              Together
            </h1>
            <div className="flex flex-col justify-center mt-6 md:mt-0">
              <p className="archivo-font lg:text-xl md:text-lg md:ml-16">
                User can easily browse, organize, and manage their time
                efficiently. Manage the projects with ease and smooth way.
              </p>
              <Button asChild className="md:ml-16 mt-5 w-[150px]">
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
