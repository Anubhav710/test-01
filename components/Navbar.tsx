import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-black-100 justify-center fixed top-0 z-50 w-full border-b-2 border-white-400/10 py-7 text-white">
      <div className="flex justify-between mx-auto w-full max-w-screen-2xl px-6 sm:px-16  ">
        <Link href={"/"}>
          <Image src={"/jsm-logo.svg"} alt="logo" width={55} height={40} />
        </Link>
        <Image
          src={"/hamburger-menu.svg"}
          width={30}
          height={30}
          alt="Hambuger menu"
          className="block md:hidden"
        />
        <ul className="flex items-center justify-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href={"/"}>Next.js 13.4 Course</Link>
          </li>
          <li className="body-text  !font-normal">
            <Link href={"/"}>Masterclass</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
