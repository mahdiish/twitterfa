"use client";
import { Children } from "react";
import useStore from "../../store/store";
export default function Background({ children }) {
  const theme = useStore((state) => state.theme);
  const backgroundClassNamesFn = (theme) => {
    if (theme === "initial") {
      return "min-h-screen p-8 sm:p-10 bg-white py-3 text-black";
    } else if (theme === "light") {
      return "min-h-screen p-8 sm:p-10 bg-white py-3 text-black";
    } else if (theme === "dark") {
      return " min-h-screen  p-8 sm:p-10 bg-black py-3 text-white";
    }
  };
  return <main className={backgroundClassNamesFn(theme)}>{children}</main>;
}
