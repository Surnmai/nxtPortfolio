"use client";

// import effect
import { useEffect } from "react";

// import icons
import { RiArrowUpSLine } from "react-icons/ri";

// import  react scroll
import { animateScroll as scroll } from "react-scroll";

// import context
import { useGlobalContext } from "../context";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const ScrollToTop = () => {
  const { top, setTop } = useGlobalContext();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 200 ? setTop(true) : setTop(false);
    });

    return window.removeEventListener("scroll", () => {
      window.scrollY > 200 ? setBg(true) : setBg(false);
    });
  });

  return (
    top && (
      <button
        onClick={() => {
          scrollToTop();
        }}
        className="btn bg-black hover:bg-black h-14 w-10 fixed bottom-[2%] right-[4%] z-50 transition-all"
      >
        <div className="text-3xl">
          <RiArrowUpSLine />
        </div>
      </button>
    )
  );
};

export default ScrollToTop;
