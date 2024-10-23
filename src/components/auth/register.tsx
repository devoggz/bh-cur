"use client";

import clsx from "clsx";
import SignInForm from "./sign-in-form";
import { Image, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import UserButton from "../UserButton";
import RegisterForm from "./register-form";

export default function Register() {
  const router = useRouter();

  return (
    <div className="mb-12 flex flex-col items-center justify-center  px-2 space-y-4 ">
      <div className="mt-6 ">
        <h2 className="  text-2xl font-bold titlecase text-bhgreen leading-[48px] mt-12 ">
          Tengeneza akaunti yangu{" "}
        </h2>
      </div>

      <RegisterForm />
      <div className=" mb-2">
        <p className="text-center text-small">
          Una akaunti tayari{" "}
          <Link
            className="cursor-pointer font-bold text-bhgreen"
            size="sm"
            onPress={() => router.replace("/login")}
          >
            Login/ Ingia{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
