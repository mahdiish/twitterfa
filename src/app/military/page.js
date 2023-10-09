import { getSortedPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import ItemTemplate from "@/components/ItemTemplate";
const allMilitaryPostsData = getSortedPostsData("posts/military");

export default function MilitaryPage() {
  const renderedContents = allMilitaryPostsData.map((content) => {
    return <ItemTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      <h1 className="text-right font-vazir pb-2 px-2">نظامی</h1>
      {renderedContents}
    </Background>
  );
}
