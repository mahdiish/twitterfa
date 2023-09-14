"use client";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [headerLinkClassNames, setHeaderLinkClassNames] = useState(
    "no-underline font-bold text-white text-base px-2 py-2 font-vazir border-solid border-b-2 border-transparent hover:border-white hidden md:block"
  );
  const [headerLinks, setHeaderLinks] = useState(
    "flex flex-row-reverse justify-between items-center w-8/12"
  );
  const [closeMenuClassNames, setCloseMenuClassNames] = useState(
    "hidden md:hidden text-white font-bold text-lg cursor-pointer absolute right-5 top-5"
  );
  const handleHamburgerClick = () => {
    setHeaderLinkClassNames(
      "no-underline font-bold text-white text-base px-2 py-2 font-vazir border-solid border-b-2 border-transparent hover:border-white"
    );
    setHeaderLinks(
      "flex flex-col justify-between items-end pr-10 sm:pr-20 md:flex-row-reverse w-8/12 h-screen md:h-full absolute md:relative bg-twitter-blue top-0 left-0 py-10 md:py-0 md:items-center"
    );
    setCloseMenuClassNames(
      "block md:hidden text-white font-bold text-lg cursor-pointer absolute right-5 top-5"
    );
  };
  const handleCloseMenuClick = () => {
    setHeaderLinkClassNames(
      "no-underline font-bold text-white text-base px-2 py-2 font-vazir border-solid border-b-2 border-transparent hover:border-white hidden md:block"
    );
    setHeaderLinks("flex flex-row-reverse justify-between items-center w-8/12");
    setCloseMenuClassNames(
      "hidden md:hidden text-white font-bold text-lg cursor-pointer absolute right-5 top-5"
    );
  };
  return (
    <div className="flex flex-row-reverse justify-between items-center w-full h-16 bg-twitter-blue px-10 mb-3">
      <Link className="text-2xl font-bold text-white font-vazir" href="/">
        توییترفا
      </Link>
      <div className={headerLinks}>
        <AiOutlineClose
          className={closeMenuClassNames}
          onClick={handleCloseMenuClick}
        />
        <Link className={headerLinkClassNames} href="/social">
          اجتماعی
        </Link>
        <Link className={headerLinkClassNames} href="/politic">
          سیاسی
        </Link>
        <Link className={headerLinkClassNames} href="/military">
          نظامی
        </Link>
        <Link className={headerLinkClassNames} href="/sport">
          ورزشی
        </Link>
        <Link className={headerLinkClassNames} href="/economic">
          اقتصادی
        </Link>
        <Link className={headerLinkClassNames} href="/technology">
          تکنولوژی
        </Link>
        <Link className={headerLinkClassNames} href="/art">
          هنر
        </Link>
        <Link className={headerLinkClassNames} href="/tourism">
          گردشگری
        </Link>
      </div>
      <RxHamburgerMenu
        onClick={handleHamburgerClick}
        className="block md:hidden text-white font-bold text-lg cursor-pointer"
      />
    </div>
  );
}
