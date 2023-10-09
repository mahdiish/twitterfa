import { getSortedPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import ItemTemplate from "@/components/ItemTemplate";
const allTechnologyPostsData = getSortedPostsData("posts/technology");

export default function TechnologyPage() {
  const renderedContents = allTechnologyPostsData.map((content) => {
    return <ItemTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      <h1 className="text-right font-vazir pb-2 px-2">تکنولوژی</h1>
      {renderedContents}
    </Background>
  );
}
