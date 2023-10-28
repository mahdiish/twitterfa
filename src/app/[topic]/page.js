import { getPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import ItemTemplate from "@/components/ItemTemplate";

export function generateStaticParams() {
  const topics = [
    "art",
    "economic",
    "military",
    "politic",
    "social",
    "sport",
    "technology",
    "tourism",
  ];
  return topics.map((topic) => ({
    topic: topic,
  }));
}

export function generateMetadata({ params }) {
  let { topic } = params;
  const pathEquals = {
    "posts/art": "هنر",
    "posts/economic": "اقتصادی",
    "posts/military": "نظامی",
    "posts/politic": "سیاسی",
    "posts/social": "اجتماعی",
    "posts/sport": "ورزشی",
    "posts/technology": "تکنولوژی",
    "posts/tourism": "گردشگری",
  };
  return {
    title: `صفحه ${pathEquals[`posts/${topic}`]} - توییترفا`,
  };
}

export default async function Post({ params }) {
  let { topic } = params;
  const pathEquals = {
    "posts/art": "هنر",
    "posts/economic": "اقتصادی",
    "posts/military": "نظامی",
    "posts/politic": "سیاسی",
    "posts/social": "اجتماعی",
    "posts/sport": "ورزشی",
    "posts/technology": "تکنولوژی",
    "posts/tourism": "گردشگری",
  };
  const allPostsData = await getPostsData(`posts/${topic}`);
  const renderedTopic = (
    <h1 className="text-right pb-2 px-2 font-medium">
      {pathEquals[`posts/${topic}`]}
    </h1>
  );
  const renderedContents = allPostsData.map((content) => {
    return <ItemTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      {renderedTopic}
      {renderedContents}
    </Background>
  );
}
