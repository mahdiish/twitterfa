import Link from "next/link";
import Background from "@/components/background";
import {
  getAuthorsWithTerm,
  getContentsWithTerm,
  getTagsWithTerm,
} from "../../../../lib/posts";
import { toPersianNumber } from "../../../../lib/digits";

export default async function Home({ searchParams }) {
  const searchTerm = searchParams.q;
  const authorsWithTerm = await getAuthorsWithTerm(
    [
      "posts/art",
      "posts/economic",
      "posts/military",
      "posts/politic",
      "posts/social",
      "posts/sport",
      "posts/technology",
      "posts/tourism",
    ],
    searchTerm
  );
  const renderedAuthors = authorsWithTerm.map((author) => {
    return (
      <Link href={`/authors/${author}`}>
        <p className="mx-2 px-3 py-1 inline-block font-vazir text-sm text-black font-medium bg-gray-300 rounded-md">
          {author}
        </p>
      </Link>
    );
  });

  const tagsWithTerm = await getTagsWithTerm(
    [
      "posts/art",
      "posts/economic",
      "posts/military",
      "posts/politic",
      "posts/social",
      "posts/sport",
      "posts/technology",
      "posts/tourism",
    ],
    searchTerm
  );

  const contentsWithTerm = await getContentsWithTerm(
    [
      "posts/art",
      "posts/economic",
      "posts/military",
      "posts/politic",
      "posts/social",
      "posts/sport",
      "posts/technology",
      "posts/tourism",
    ],
    searchTerm
  );

  return (
    <Background>
      <h1 className="text-right font-vazir font-bold pb-3 px-2">
        نتایج برای {toPersianNumber(searchTerm)}
      </h1>

      <div className="flex font-vazir text-base font-normal mb-4">
        <Link
          href={`/search?q=${searchTerm}`}
          className="flex items-center ml-5"
        >
          مطالب
          <span className="text-[11px] font-thin pr-[0.5px] pb-2">
            {toPersianNumber(`${contentsWithTerm.length}`)}
          </span>
        </Link>

        <Link
          href={`/search/tags?q=${searchTerm}`}
          className="flex items-center ml-5"
        >
          تگ ها
          <span className="text-[11px] font-thin pr-[0.5px] pb-2">
            {toPersianNumber(`${tagsWithTerm.length}`)}
          </span>
        </Link>

        <Link
          href={`/search/authors?q=${searchTerm}`}
          className="flex items-center ml-5 border-b-2 border-gray-300"
        >
          نویسندگان{" "}
          <span className="text-[11px] font-thin pr-[0.5px] pb-2">
            {toPersianNumber(`${authorsWithTerm.length}`)}
          </span>
        </Link>
      </div>

      <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        {renderedAuthors}
      </div>
    </Background>
  );
}
