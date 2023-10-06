"use client";
import useStore from "../../store/store";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
export default function PostTemplate({
  title,
  authorId,
  link,
  author,
  date,
  tags,
  contentHtml,
}) {
  const theme = useStore((state) => state.theme);
  const backgroundClassNamesFn = (theme) => {
    if (theme === "initial" || theme === "light") {
      return "w-full sm:w-4/5 md:w-2/3 bg-gray-100 p-5 sm:p-9 rounded-xl shadow-md shadow-gray-300";
    } else if (theme === "dark") {
      return "w-full sm:w-4/5 md:w-2/3 bg-gray-800 p-5 sm:p-9 rounded-xl shadow-md shadow-gray-700";
    }
  };

  const tagClassNamesFn = (theme) => {
    if (theme === "initial" || theme === "light") {
      return "mx-2 px-3 py-1 font-vazir text-sm text-black font-medium bg-gray-300 rounded-md";
    } else if (theme === "dark") {
      return "mx-2 px-3 py-1 font-vazir text-sm text-white font-medium bg-gray-900 rounded-md";
    }
  };
  const renderedTags = tags.map((tag) => {
    return (
      <Link href={`/tags/${tag}`} className={tagClassNamesFn(theme)}>
        {tag}
      </Link>
    );
  });
  return (
    <div className="flex text-right flex-col items-center w-full">
      <div className={backgroundClassNamesFn(theme)}>
        <h1 className="font-vazir pb-2 px-2 font-bold text-base mt-3">
          {title}
        </h1>
        <div className="flex items-center mb-3.5">
          <Image
            src={`/profiles/${authorId}.jpg`}
            width={45}
            height={45}
            className="rounded-full ml-2"
          />
          <a
            href={link}
            className="font-vazir text-sm pl-3 whitespace-nowrap text-ellipsis overflow-hidden"
          >
            {author}
          </a>
          <p className=" font-vazir text-sm pl-3">|</p>
          <p className=" font-vazir text-sm whitespace-nowrap text-ellipsis overflow-hidden">
            {date}
          </p>
        </div>

        <ReactMarkdown
          className="font-vazir text-[15px] text-right"
          components={{
            img: function ({ ...props }) {
              const substrings = props.alt?.split("{{");
              const alt = substrings[0].trim();

              const width = substrings[1]
                ? substrings[1].match(/(?<=w:\s?)\d+/g)[0]
                : 800;
              const height = substrings[1]
                ? substrings[1].match(/(?<=h:\s?)\d+/g)[0]
                : 400;

              return (
                <Image
                  src={props.src}
                  alt={alt}
                  width={350}
                  height={100}
                  className="my-5 mx-auto"
                />
              );
            },
          }}
        >
          {contentHtml}
        </ReactMarkdown>
        <div className="flex mt-5">{renderedTags}</div>
      </div>
    </div>
  );
}
