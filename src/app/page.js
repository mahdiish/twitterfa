import TopicTemplate from "@/components/TopicTemplate";
import { topicData } from "@/data/topicData";

export default function Home() {
  ///
  const renderedTopics = topicData.map((topic) => {
    return (
      <div>
        <TopicTemplate key={topic.title} topic={topic} />
      </div>
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
        {renderedTopics}
      </div>
    </main>
  );
}
