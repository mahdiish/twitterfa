"use client";
import useStore from "../../store/store";
import { toPersianNumber } from "../../lib/digits";
export default function AuthorTemplate({ author }) {
  const theme = useStore((state) => state.theme);
  const authorClassNamesFn = (theme) => {
    if (theme === "initial" || theme === "light") {
      return "mx-2 my-1 px-3 py-1 text-sm font-medium text-center bg-gray-100 rounded-md whitespace-nowrap text-ellipsis overflow-hidden";
    } else if (theme === "dark") {
      return "mx-2 my-1 px-3 py-1 text-sm font-medium text-center bg-gray-800 rounded-md whitespace-nowrap text-ellipsis overflow-hidden";
    }
  };
  return <p className={authorClassNamesFn(theme)}>{toPersianNumber(author)}</p>;
}
