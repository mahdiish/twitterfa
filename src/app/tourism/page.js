import { getSortedPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import ItemTemplate from "@/components/ItemTemplate";
const allTourismPostsData = getSortedPostsData("posts/tourism");

export default function TourismPage() {
  const renderedContents = allTourismPostsData.map((content) => {
    return <ItemTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      <h1 className="text-right font-vazir pb-2 px-2">گردشگری</h1>
      {renderedContents}
    </Background>
  );
}
