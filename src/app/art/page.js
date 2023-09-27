import { getSortedPostsData } from "../../../lib/posts";
import Background from "@/components/background";
import TopicPageTemplate from "@/components/TopicPageTemplate";
const allArtPostsData = getSortedPostsData("posts/art");

export default function ArtPage() {
  const renderedContents = allArtPostsData.map((content) => {
    return <TopicPageTemplate content={content} key={content.id} />;
  });
  return (
    <Background>
      <h1 className="text-right font-vazir pb-2 px-2">هنر</h1>
      {renderedContents}
    </Background>
  );
}
