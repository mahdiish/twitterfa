"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
//
//
export default function Header() {
  const headerLinkClassNames =
    "no-underline font-bold text-white text-sm md:text-base px-2 py-4 md:py-3 mx-1 font-vazir border-solid border-b-2 border-transparent hover:border-white";
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="sticky top-0 drop-shadow-md">
      <div className="flex justify-between items-center w-full h-20 px-5 md:px-14 overflow-hidden bg-white">
        <Link
          className="text-2xl font-bold text-twitter-blue font-vazir"
          href="/"
        >
          توییترفا
        </Link>
        <div className="w-7/12 sm:5/12 md:w-4/12">
          <div className="flex justify-between items-center border-solid border-2 border-twitter-blue h-9 rounded">
            <input
              placeholder="در بین توییتها جستجو کنید..."
              className="border-none	focus:outline-none px-2 font-vazir text-twitter-blue text-sm w-full"
              value={searchTerm}
              onChange={handleSearchTermChange}
            ></input>
            <div className="h-9 w-9 bg-twitter-blue flex justify-around items-center cursor-pointer">
              <FaSearch className="text-xl font-bold text-white text-left" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-twitter-blue flex justify-between items-center px-4 md:px-16 h-14 w-full overflow-x-auto md:overflow-x-hidden [&::-webkit-scrollbar]:hidden">
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
    </div>
  );
}
