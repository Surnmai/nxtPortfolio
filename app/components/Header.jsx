"use client";

import { useEffect } from "react";

// import GlobalContext
import { useGlobalContext } from "../context";

// import data
import { nav } from "../data";

// import Logo
import Logo from "@/app/img/logo.svg";

// import Link
import Link from "next/link";

// import icons
import { RiBarChartHorizontalLine, RiCloseFill } from "react-icons/ri";

// import next Image
import Image from "next/image";

const Header = () => {
  // window scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 40 ? setBg(true) : setBg(false);
    });

    return window.removeEventListener("scroll", () =>
      window.scrollY > 40 ? setBg(true) : setBg(false)
    );
  });

  const { bg, setBg, showNav, setShowNav } = useGlobalContext();

  return (
    <header
      className={`fixed left-0 top-0 right-0 z-50 transition-all duration-300 font-primary ${
        bg ? "bg-white shadow-lg py-5" : " py-9"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo  */}
        <Link href="#" className="cursor-pointer">
          <Image src={Logo} alt="logo" />
        </Link>

        {/* nav Items  */}
        <nav>
          <ul
            className={`flex gap-x-4 flex-col justify-center items-center bg-accent absolute top-0 w-80 h-screen transition-all duration-300 ${
              showNav ? "left-0" : "-left-full"
            }`}
          >
            {nav.map((item, idx) => {
              return (
                <li key={idx} className="cursor-pointer hover:text-white py-2">
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* menu items  */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? (
            <RiCloseFill className="w-8 h-8" />
          ) : (
            <RiBarChartHorizontalLine className="w-8 h-8" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
