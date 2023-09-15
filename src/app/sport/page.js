import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import { FaHotjar } from "react-icons/fa";
const allArtPostsData = getSortedPostsData("posts/sport");

const renderedContents = allArtPostsData.map((content) => {
  return (
    <Link
      href={`/art/${content.id}`}
      className="block text-right py-1 px-6 even:bg-gray-100 border-solid border-r-2 even:border-twitter-blue odd:border-gray-100"
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
});

export default function SportPage() {
  return (
    <div className="p-8 sm:p-10">
      <h1 className="text-right font-vazir pb-2 px-2">ورزشی</h1>
      {renderedContents}
    </div>
  );
}
