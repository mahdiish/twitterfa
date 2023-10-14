import TopicTemplate from "@/components/TopicTemplate";
import { topicData } from "@/data/topicData";
import Background from "@/components/background";
import { toPersianNumber } from "../../lib/posts";

export default function Home() {
  const renderedTopics = topicData.map((topic) => {
    return (
      <div>
        <TopicTemplate key={topic.title} topic={topic} />
      </div>
    );
  });

  return (
    <Background>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
        {renderedTopics}
      </div>
    </Background>
  );
}
