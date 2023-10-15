import { getAllTags, getPostsWithTag } from "../../../../lib/posts";
import Background from "@/components/background";
import TagItemTemplate from "@/components/TagItemTemplate";
import { toPersianNumber } from "../../../../lib/digits";

export function generateStaticParams() {
  const tags = getAllTags([
    "posts/art",
    "posts/economic",
    "posts/military",
    "posts/politic",
    "posts/social",
    "posts/sport",
    "posts/technology",
    "posts/tourism",
  ]);
  return tags.map((tag) => ({
    tagName: tag,
  }));
}

export function generateMetadata({ params }) {
  let { tagName } = params;
  tagName = decodeURIComponent(tagName);
  return {
    title: `مطالب حاوی تگ ${toPersianNumber(tagName)} - توییترفا`,
  };
}

export default async function Post({ params }) {
  let { tagName } = params;
  tagName = decodeURIComponent(tagName);
  const allTagPosts = await getPostsWithTag(
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
    tagName
  );
  const renderedContents = allTagPosts.map((content) => {
    return <TagItemTemplate content={content} key={content.id} />;
  });

  return (
    <Background>
      <h1 className="text-right font-vazir pb-3 px-2">
        مطالب حاوی تگ {toPersianNumber(tagName)}
      </h1>
      <div>{renderedContents}</div>
    </Background>
  );
}
