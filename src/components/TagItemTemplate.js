"use client";
import Link from "next/link";
import { FaHotjar } from "react-icons/fa";
import useStore from "../../store/store";
import { toPersianNumber } from "../../lib/digits";

export default function TagItemTemplate({ content }) {
  const theme = useStore((state) => state.theme);
  const contentTitleFn = (theme) => {
    if (theme === "initial" || theme === "light") {
      return "block text-right py-1 px-6 odd:bg-gray-100 border-solid border-r-2 odd:border-twitter-blue even:border-gray-100";
    } else if (theme === "dark") {
      return "block text-right py-1 px-6 odd:bg-gray-500 border-solid border-r-2 odd:border-twitter-blue even:border-gray-500";
    }
  };
  return (
    <Link
      href={`/${content.topic}/${content.id}`}
      className={contentTitleFn(theme)}
    >
      <div className="flex justify-between items-center">
        <p className="font-vazir text-sm w-8/12 whitespace-nowrap text-ellipsis overflow-hidden">
          {toPersianNumber(content.title)}
        </p>
        <div className="flex justify-between items-center w-4/12 mr-2">
          <p className="font-vazir text-sm whitespace-nowrap text-ellipsis overflow-hidden">
            {toPersianNumber(content.author)}
          </p>
          <FaHotjar className="text-twitter-blue text-base mr-1" />
        </div>
      </div>
    </Link>
  );
}
