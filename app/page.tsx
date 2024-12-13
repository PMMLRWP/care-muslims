
import ProfileForm from "@/components/forms/PForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/*  TODO: OTP Verification passkyMdal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496] flex">
          <Image
            src="/assets/logo/pmml-logo.svg"
            height={1000}
            width={1000}
            alt="PMML"
            className="mb-12 h-10 w-fit "
          />
          <p className="m-1 pl-3 pt-1">PMML Rawalpindi</p>


        </div>
        <ProfileForm />
        <div className="text-sm mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            @ 2024 DevSTRIM
          </p>
          <p >
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </p>
        </div>


      </section>

      <Image
            src="/assets/content/Empowering-pmml1.jpg"
            height={1000}
            width={1000}
            alt="PMML"
            className="side-img max-w-[50%] "
          />
    </div>
  );
}
