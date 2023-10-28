import { getAllAuthors, getPostsWithAuthor } from "../../../../lib/posts";
import Background from "@/components/background";
import TagItemTemplate from "@/components/TagItemTemplate";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa6";

export function generateStaticParams() {
  const authors = getAllAuthors([
    "posts/art",
    "posts/economic",
    "posts/military",
    "posts/politic",
    "posts/social",
    "posts/sport",
    "posts/technology",
    "posts/tourism",
  ]);
  return authors.map((author) => ({
    authorName: author,
  }));
}

export function generateMetadata({ params }) {
  let { authorName } = params;
  authorName = decodeURIComponent(authorName);
  return {
    title: `صفحه ${authorName} - توییترفا`,
  };
}

export default async function Post({ params }) {
  let { authorName } = params;
  authorName = decodeURIComponent(authorName);

  const allAuthorPosts = await getPostsWithAuthor(
    [
      "posts/art",
      "posts/economic",
      "posts/military",
      "posts/politic",
      "posts/social",
      "posts/sport",
      "posts/technology",
      "posts/tourism",
    ],
    authorName
  );

  const authorId = allAuthorPosts[0].authorId;
  const twitterProfile = `https://twitter.com/${authorId}`;

  const renderedContents = allAuthorPosts.map((content) => {
    return <TagItemTemplate content={content} key={content.id} />;
  });

  return (
    <Background>
      <div className="flex items-center justify-start mb-4">
        <div className="flex items-center ml-5">
          <Image
            src={`/profiles/${authorId}.jpg`}
            alt={`${authorId} on twitter`}
            width={45}
            height={45}
            className="rounded-full ml-2"
          />
          <h1 className="text-right font-bold">{authorName}</h1>
        </div>
        |
        <a href={twitterProfile}>
          <FaTwitter className="mr-5 text-lg" />
        </a>
      </div>
      <div>{renderedContents}</div>
    </Background>
  );
}
