import { getSortedPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import ItemTemplate from "@/components/ItemTemplate";
const allSocialPostsData = getSortedPostsData("posts/social");

export default function SocialPage() {
  const renderedContents = allSocialPostsData.map((content) => {
    return <ItemTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      <h1 className="text-right font-vazir pb-2 px-2">اجتماعی</h1>
      {renderedContents}
    </Background>
  );
}
