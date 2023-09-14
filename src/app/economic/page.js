import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import { FaHotjar } from "react-icons/fa";
const allArtPostsData = getSortedPostsData("posts/economic");

const renderedContents = allArtPostsData.map((content) => {
  return (
    <Link
      href={`/art/${content.id}`}
      className="block text-right py-1 px-2 even:bg-gray-100 border-solid border-r-2 even:border-twitter-blue odd:border-gray-100"
    >
      <div className="flex justify-between items-center px-5">
        <div className="flex justify-between items-center w-2/5">
          <FaHotjar className="text-twitter-blue text-base" />
          <p className="font-vazir text-sm">{content.author}</p>
        </div>
        <p className="font-vazir text-sm w-3/5">{content.title}</p>
      </div>
    </Link>
  );
});

export default function EconomicPage() {
  return (
    <div className="p-8 sm:p-10">
      <h1 className="text-right font-vazir pb-2 px-2">اقتصادی</h1>
      {renderedContents}
    </div>
  );
}
