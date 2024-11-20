"use client";

import { useEffect } from "react";

// import GlobalContext
import { useGlobalContext } from "../context";

// import data
import { nav } from "../data";

// import Logo
import Logo from "@/app/img/logo.svg";

// import Link
// import Link from "next/link";
import { Link } from "react-scroll";

// import icons
import { RiBarChartHorizontalLine, RiCloseFill } from "react-icons/ri";

// import next Image
import Image from "next/image";

// import components
import NavMobile from "./NavMobile";

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
      <div className="container flex justify-between items-center md:px-0">
        {/* Logo  */}
        <Link to="home" smooth={true} className="cursor-pointer">
          <Image src={Logo} alt="logo" />
        </Link>

        {/* nav Items  */}
        <nav>
          <ul className="hidden md:flex gap-x-4 text-lg md:text-2xl">
            {nav.map((item, idx) => {
              return (
                <Link
                  // href={item.path}
                  to={item.name}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-71}
                  duration={500}
                  key={idx}
                  className="cursor-pointer hover:text-accent hover:transition-all hover:duration-500 py-2 transition-all"
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </nav>

        {/* NavMobile  */}
        <NavMobile nav={nav} />

        {/* menu items  */}
        <div
          className="md:hidden cursor-pointer"
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
