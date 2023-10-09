"use client";
import Link from "next/link";
import { FaHotjar } from "react-icons/fa";
import useStore from "../../store/store";

export default function ItemTemplate({ content }) {
  const theme = useStore((state) => state.theme);
  const contentTitleFn = (theme) => {
    if (theme === "initial" || theme === "light") {
      return "block text-right py-1 px-6 even:bg-gray-100 border-solid border-r-2 even:border-twitter-blue odd:border-gray-100";
    } else if (theme === "dark") {
      return "block text-right py-1 px-6 even:bg-gray-500 border-solid border-r-2 even:border-twitter-blue odd:border-gray-500";
    }
  };
  return (
    <Link
      href={`/${content.topic}/${content.id}`}
      className={contentTitleFn(theme)}
    >
      <div className="flex justify-between items-center">
        <p className="font-vazir text-sm w-8/12 whitespace-nowrap text-ellipsis overflow-hidden">
          {content.title}
        </p>
        <div className="flex justify-between items-center w-4/12 mr-2">
          <p className="font-vazir text-sm whitespace-nowrap text-ellipsis overflow-hidden">
            {content.author}
          </p>
          <FaHotjar className="text-twitter-blue text-base mr-1" />
        </div>
      </div>
    </Link>
  );
}
