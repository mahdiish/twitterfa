import { getSortedPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import ItemTemplate from "@/components/ItemTemplate";
const allPoliticPostsData = getSortedPostsData("posts/politic");

export default function PoliticPage() {
  const renderedContents = allPoliticPostsData.map((content) => {
    return <ItemTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      <h1 className="text-right font-vazir pb-2 px-2">سیاسی</h1>
      {renderedContents}
    </Background>
  );
}
