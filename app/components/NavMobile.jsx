"use client";
import { useEffect, useRef } from "react";

// import context
import { useGlobalContext } from "../context";

// import Link
// import Link from "next/link";
import { Link } from "react-scroll";

const NavMobile = ({ nav }) => {
  const { showNav, closeMenuBar } = useGlobalContext();
  const menuRef = useRef(null);

  // react code to close navbar menu on window scroll and click
  useEffect(() => {
    const handleClickOutside = (e) => {
      // console.log(e.target);
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenuBar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenuBar, menuRef]);

  useEffect(() => {
    const closeOnScroll = () => {
      return closeMenuBar();
    };

    window.addEventListener("scroll", closeOnScroll);

    return () => {
      window.removeEventListener("scroll", closeOnScroll());
    };
  }, []);

  // return (
  //   <nav
  //     className="md:hidden"
  //     ref={menuRef}
  //   >
  //     <ul
  //       className={`flex gap-x-4 flex-col justify-center items-center bg-accent absolute top-0 w-80 h-screen transition-all duration-300 ${
  //         showNav ? "left-0" : "-left-full"
  //       }`}
  //     >
  //       {nav.map((item, idx) => {
  //         //   console.log(item.name);

  //         return (
  //           // <li
  //           //   key={idx}
  //           //   className="cursor-pointer hover:text-white hover:transition-all duration-100 py-2 capitalize"
  //           // >
  //           //   {item.name}
  //           // </li>
  //           <Link
  //             to={item.name}
  //             activeClass="active"
  //             spy={true}
  //             smooth={true}
  //             // offset={-70}
  //             key={idx}
  //             className="cursor-pointer hover:text-white hover:transition-all duration-100 py-2 capitalize"
  //             onClick={() => closeMenuBar()}
  //           >
  //             {item.name}
  //           </Link>
  //         );
  //       })}
  //     </ul>
  //   </nav>
  // );

  return (
    <>
      {/* Dark overlay - only visible when menu is open */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenuBar}
        />
      )}

      {/* Nav menu */}
      <nav
        ref={menuRef}
        className={`md:hidden fixed inset-y-0 z-50 w-80 transition-all duration-300 ${
          showNav ? "left-0" : "-left-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center bg-accent h-full w-full">
          {nav.map((item, idx) => (
            <Link
              to={item.name}
              activeClass="active"
              spy={true}
              smooth={true}
              key={idx}
              className="cursor-pointer hover:text-white transition-all duration-100 py-2 capitalize w-full text-center"
              onClick={closeMenuBar}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavMobile;
