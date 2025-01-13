import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.svg";
import LoginButton from "./button";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between h-36 max-2xl:max-w-[1200px] max-xl:max-w-[1000px] max-lg:max-w-[900px]">
      <div>
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            priority
            className="w-auto h-auto"
          />
        </Link>
      </div>
      <div>
        <ul className="flex items-center gap-12 text-white font-medium">
          <li className="hover:text-secondary">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">About Us</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>
      <div>
        <LoginButton />
      </div>
    </div>
  );
}

export default Navbar;