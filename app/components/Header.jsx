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
      className={`fixed left-0 top-0 right-0 z-50 transition-all duration-300 ${
        bg ? "bg-white shadow-lg py-5" : " py-9"
      }`}
    >
      Header
    </header>
  );
};

export default Header;
