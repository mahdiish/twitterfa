import { getSortedPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import ItemTemplate from "@/components/ItemTemplate";
const allEconomicPostsData = getSortedPostsData("posts/economic");

export default function EconomicPage() {
  const renderedContents = allEconomicPostsData.map((content) => {
    return <ItemTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      <h1 className="text-right font-vazir pb-2 px-2">اقتصادی</h1>
      {renderedContents}
    </Background>
  );
}
