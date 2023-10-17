import {
  getPostsDataTopics,
  getSortedPostsDataTopics,
  getPostDataTest,
} from "../../../../lib/posts";
import { notFound } from "next/navigation";
import Background from "@/components/background";
import PostTemplate from "@/components/postTemplate";

export function generateStaticParams() {
  const posts = getSortedPostsDataTopics([
    "posts/art",
    "posts/economic",
    "posts/military",
    "posts/politic",
    "posts/social",
    "posts/sport",
    "posts/technology",
    "posts/tourism",
  ]);
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }) {
  const posts = getSortedPostsDataTopics([
    "posts/art",
    "posts/economic",
    "posts/military",
    "posts/politic",
    "posts/social",
    "posts/sport",
    "posts/technology",
    "posts/tourism",
  ]);
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }) {
  const posts = getSortedPostsDataTopics([
    "posts/art",
    "posts/economic",
    "posts/military",
    "posts/politic",
    "posts/social",
    "posts/sport",
    "posts/technology",
    "posts/tourism",
  ]);
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  let { title, date, author, authorId, link, tags, contentHtml } =
    await getPostsDataTopics(posts, postId);

  return (
    <Background>
      <PostTemplate
        title={title}
        authorId={authorId}
        link={link}
        author={author}
        date={date}
        tags={tags}
        contentHtml={contentHtml}
      />
    </Background>
  );
}
