import Image from "next/image";
export default function topicTemplate({ topic }) {
  return (
    <div>
      <h1>{topic.title}</h1>
      <Image src={topic.img} />
      <p>{topic.content.title}</p>
    </div>
  );
}
