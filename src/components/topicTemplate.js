"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHotjar } from "react-icons/fa";
import useStore from "../../store/store";
import { toPersianNumber } from "../../lib/digits";

export default function TopicTemplate({ topic }) {
  const theme = useStore((state) => state.theme);
  const renderedContents = topic.contents.map((content) => {
    const contentTitleFn = (theme) => {
      if (theme === "initial" || theme === "light") {
        return "font-vazir text-sm w-11/12 whitespace-nowrap text-ellipsis overflow-hidden text-black";
      } else if (theme === "dark") {
        return "font-vazir text-sm w-11/12 whitespace-nowrap text-ellipsis overflow-hidden text-white";
      }
    };

    const contentFn = (theme) => {
      if (theme === "initial" || theme === "light") {
        return "block text-right py-1 px-2 odd:bg-gray-100 border-solid border-r-2 odd:border-twitter-blue even:border-gray-100";
      } else if (theme === "dark") {
        return "block text-right py-1 px-2 odd:bg-gray-500 border-solid border-r-2 odd:border-twitter-blue even:border-gray-500";
      }
    };

    return (
      <Link
        href={`${content.topic}/${content.id}`}
        className={contentFn(theme)}
      >
        <div className="flex justify-between items-center">
          <p className={contentTitleFn(theme)}>
            {toPersianNumber(content.title)}
          </p>

          <FaHotjar className="text-twitter-blue text-base" />
        </div>
      </Link>
    );
  });
  const topicTitleFn = (theme) => {
    if (theme === "initial" || theme === "light") {
      return "text-right font-vazir p-1 text-black";
    } else if (theme === "dark") {
      return "text-right font-vazir p-1 text-white";
    }
  };
  const renderedTitle = (
    <h1 className={topicTitleFn(theme)}>
      <Link href={topic.href}>{toPersianNumber(topic.title)}</Link>
    </h1>
  );

  return (
    <div className="border-solid border-2 border-gray-200 p-1 rounded-lg">
      <Image
        src={topic.imageSrc}
        width={500}
        height={500}
        className="w-full h-60"
      />
      {renderedTitle}
      {renderedContents}
    </div>
  );
}
