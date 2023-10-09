import { getSortedPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import ItemTemplate from "@/components/ItemTemplate";
const allSportPostsData = getSortedPostsData("posts/sport");

export default function SportPage() {
  const renderedContents = allSportPostsData.map((content) => {
    return <ItemTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      <h1 className="text-right font-vazir pb-2 px-2">ورزشی</h1>
      {renderedContents}
    </Background>
  );
}
