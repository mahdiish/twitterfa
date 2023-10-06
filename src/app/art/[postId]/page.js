import { getSortedPostsData, getPostData } from "../../../../lib/posts";
import { notFound } from "next/navigation";
import Background from "@/components/background";
import PostTemplate from "@/components/postTemplate";

export function generateStaticParams() {
  const posts = getSortedPostsData("posts/art");
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }) {
  const posts = getSortedPostsData("posts/art");
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
  const posts = getSortedPostsData("posts/art");
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  let { title, date, author, authorId, link, tags, contentHtml } =
    await getPostData(postId, "posts/art");

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
