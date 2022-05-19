import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  return (
    <nav className="w-full h-[80px]  z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-4 w-full flex justify-between items-center h-full">
        <h1 className="text-3xl font-bold sm:text-4xl">Brand</h1>
        <ul className="hidden md:flex justify-between">
          <li>
            <Link smooth={true} to="home" duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link smooth={true} to="about" offset={-50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link smooth={true} to="support" offset={-50} duration={500}>
              Support
            </Link>
          </li>
          <li>
            <Link smooth={true} to="platform" offset={-100} duration={500}>
              Platforms
            </Link>
          </li>
          <li>
            <Link smooth={true} to="pricing" offset={-50} duration={500}>
              Pricing
            </Link>
          </li>
        </ul>
        <div className="hidden gap-x-[20px] px-4 md:flex items-center justify-between">
          <button className="border-none  bg-transparent text-black">
            Sign in
          </button>
          <button className=" px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" aria-label="menu-icon" onClick={handleClick}>
          {!show ? <XIcon className="w-12" /> : <MenuIcon className="w-12" />}
        </div>
      </div>
      <div
        className={
          show
            ? "hidden"
            : "md:hidden absolute w-full px-8 bg-zinc-200 ease-in-out duration-500 "
        }
      >
        <ul className="w-full flex flex-col items-center ">
          <li
            onClick={handleClick}
            className="border-b-2 border-zinc-300 w-full"
          >
            <Link onClick={handleClick} smooth={true} to="home" duration={500}>
              Home
            </Link>
          </li>
          <li
            onClick={handleClick}
            className="border-b-2 border-zinc-300 w-full"
          >
            <Link
              smooth={true}
              onClick={handleClick}
              to="about"
              offset={-50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li
            onClick={handleClick}
            className="border-b-2 border-zinc-300 w-full"
          >
            <Link
              smooth={true}
              onClick={handleClick}
              to="support"
              offset={-50}
              duration={500}
            >
              Support
            </Link>
          </li>
          <li
            onClick={handleClick}
            className="border-b-2 border-zinc-300 w-full"
          >
            <Link
              smooth={true}
              onClick={handleClick}
              to="platform"
              offset={-100}
              duration={500}
            >
              Platforms
            </Link>
          </li>
          <li
            onClick={handleClick}
            className="border-b-2 border-zinc-300 w-full"
          >
            <Link
              smooth={true}
              onClick={handleClick}
              to="pricing"
              offset={-50}
              duration={500}
            >
              Pricing
            </Link>
          </li>
        </ul>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-4 bg-transparent text-indigo-600">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
