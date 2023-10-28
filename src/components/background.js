"use client";
import useStore from "../../store/store";
export default function Background({ children }) {
  const theme = useStore((state) => state.theme);
  const backgroundClassNamesFn = (theme) => {
    if (theme === "initial" || theme === "light") {
      return "min-h-screen px-3.5 py-6 sm:px-7 sm:py-7 bg-white  text-black";
    } else if (theme === "dark") {
      return "min-h-screen px-3.5 py-6 sm:px-7 sm:py-7 bg-black text-white";
    }
  };
  return <main className={backgroundClassNamesFn(theme)}>{children}</main>;
}
