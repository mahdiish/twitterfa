import Image from "next/image";
import Link from "next/link";
import { FaHotjar } from "react-icons/fa";

export default function TopicTemplate({ topic }) {
  const renderedContents = topic.contents.map((content) => {
    return (
      <Link
        href={`${content.topic}/${content.id}`}
        className="block text-right py-1 px-2 odd:bg-gray-100 border-solid border-r-2 odd:border-twitter-blue even:border-gray-100"
      >
        <div className="flex justify-between items-center">
          <p className="font-vazir text-sm w-11/12 whitespace-nowrap text-ellipsis overflow-hidden">
            {content.title}
          </p>
          {/* <div className="flex justify-between items-center w-3/12"> */}
          <FaHotjar className="text-twitter-blue text-base" />
          {/* <p className="font-vazir text-xs">{content.author}</p>
          </div> */}
        </div>
      </Link>
    );
  });
  return (
    <div className="border-solid border-2 border-gray-200 p-1 rounded-lg">
      <Image
        src={topic.imageSrc}
        width={500}
        height={500}
        className="w-full h-60"
      />
      <h1 className="text-right font-vazir p-1">
        <Link href={topic.href}>{topic.title}</Link>
      </h1>
      {renderedContents}
    </div>
  );
}
