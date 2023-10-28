"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import useStore from "../../store/store";
import { useRouter } from "next/navigation";

//
//

export default function Header() {
  const theme = useStore((state) => state.theme);
  const darkTheme = useStore((state) => state.darkTheme);
  const lightTheme = useStore((state) => state.lightTheme);
  const searchTerm = useStore((state) => state.searchTerm);
  const handleSearchTermChange = useStore(
    (state) => state.handleSearchTermChange
  );
  const initialSearchTerm = useStore((state) => state.initialSearchTerm);
  const ballClassNamesFn = (theme) => {
    if (theme === "initial") {
      return "absolute w-[30px] h-[30px] m-[5px] rounded-full duration-200 bg-twitter-blue";
    } else if (theme === "light") {
      return "absolute w-[30px] h-[30px] m-[5px] rounded-full duration-200 bg-twitter-blue translate-x-[0px]";
    } else if (theme === "dark") {
      return "absolute w-[30px] h-[30px] m-[5px] rounded-full duration-200 bg-twitter-blue -translate-x-[40px]";
    }
  };

  const sunClassNamesFn = (theme) => {
    if (theme === "initial") {
      return "text-[20px] text-center text-white z-10 w-1/2 leading-[40px]";
    } else if (theme === "light") {
      return "text-[20px] text-center text-white z-10 w-1/2 leading-[40px]";
    } else if (theme === "dark") {
      return "text-[20px] text-center text-twitter-blue z-10 w-1/2 leading-[40px]";
    }
  };

  const moonClassNamesFn = (theme) => {
    if (theme === "initial") {
      return "text-[20px] text-center text-twitter-blue z-10 w-1/2 leading-[40px]";
    } else if (theme === "light") {
      return "text-[20px] text-center text-twitter-blue z-10 w-1/2 leading-[40px]";
    } else if (theme === "dark") {
      return "text-[20px] text-center text-white z-10 w-1/2 leading-[40px]";
    }
  };

  const upperHeaderClassNamesFn = (theme) => {
    if (theme === "initial") {
      return "flex justify-between items-center w-full h-20 px-5 md:px-14 overflow-hidden bg-white";
    } else if (theme === "light") {
      return "flex justify-between items-center w-full h-20 px-5 md:px-14 overflow-hidden bg-white";
    } else if (theme === "dark") {
      return "flex justify-between items-center w-full h-20 px-5 md:px-14 overflow-hidden bg-black";
    }
  };

  const inputClassNamesFn = (theme) => {
    if (theme === "initial") {
      return "border-none focus:outline-none px-2  text-twitter-blue text-sm w-full bg-white";
    } else if (theme === "light") {
      return "border-none focus:outline-none px-2  text-twitter-blue text-sm w-full bg-white";
    } else if (theme === "dark") {
      return "border-none focus:outline-none px-2  text-twitter-blue text-sm w-full bg-black";
    }
  };

  //
  const headerLinkClassNames =
    "no-underline font-bold text-white text-sm md:text-base px-2 py-4 md:py-3 mx-1  border-solid border-b-2 border-transparent hover:border-white";

  const router = useRouter();

  return (
    <div className="sticky top-0 drop-shadow-md z-[50]">
      <div className={upperHeaderClassNamesFn(theme)}>
        <Link className="text-2xl font-bold text-twitter-blue " href="/">
          توییترفا
        </Link>
        <div className="w-6/12 sm:5/12 md:w-4/12">
          <div className="flex justify-between items-center border-solid border-2 border-twitter-blue h-9 rounded">
            <input
              placeholder="در بین توییتها، تگها و ... جستجو کنید"
              className={inputClassNamesFn(theme)}
              value={searchTerm}
              onChange={handleSearchTermChange}
              onKeyDown={(event) => {
                if (event.target.value !== "" && event.key === "Enter") {
                  router.push(`/search?q=${event.target.value}`);
                  event.target.value = "";
                  event.target.blur();
                }
              }}
            ></input>
            <div className="h-9 w-9 bg-twitter-blue flex justify-around items-center">
              <FaSearch
                className="text-xl font-bold text-white text-left cursor-pointer"
                onClick={() => {
                  if (searchTerm !== "") {
                    router.push(`/search?q=${searchTerm}`);
                    initialSearchTerm();
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <label className="cursor-pointer flex justify-between items-center w-[80px] h-[40px] rounded-full duration-200 border-solid border border-twitter-blue">
            <BsFillSunFill
              className={sunClassNamesFn(theme)}
              onClick={lightTheme}
            />
            <BsFillMoonFill
              className={moonClassNamesFn(theme)}
              onClick={darkTheme}
            />
            <span className={ballClassNamesFn(theme)}></span>
          </label>
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
