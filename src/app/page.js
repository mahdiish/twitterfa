import TopicTemplate from "@/components/topicTemplate";
import { topicData } from "@/data/topicData";
import Background from "@/components/background";

export default function Home() {
  const renderedTopics = topicData.map((topic) => {
    return (
      <div key={topic.title}>
        <TopicTemplate topic={topic} />
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
