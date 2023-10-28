"use client";
import useStore from "../../store/store";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { toPersianNumber } from "../../lib/digits";

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
      return "mx-2 px-3 py-1  text-sm text-black font-medium bg-gray-300 rounded-md";
    } else if (theme === "dark") {
      return "mx-2 px-3 py-1  text-sm text-white font-medium bg-gray-900 rounded-md";
    }
  };
  const renderedTags = tags.map((tag) => {
    return (
      <Link href={`/tags/${tag}`} className={tagClassNamesFn(theme)} key={tag}>
        {toPersianNumber(tag)}
      </Link>
    );
  });
  return (
    <div className="flex text-right flex-col items-center w-full">
      <div className={backgroundClassNamesFn(theme)}>
        <h1 className=" pb-2 px-2 font-bold text-base mt-3">
          {toPersianNumber(title)}
        </h1>

        <div className="flex items-center mb-3.5">
          <Link href={`/authors/${author}`} className="flex items-center">
            <Image
              src={`/profiles/${authorId}.jpg`}
              width={45}
              height={45}
              alt={author}
              className="rounded-full ml-2"
            />
            <p className=" text-sm pl-3 whitespace-nowrap text-ellipsis overflow-hidden">
              {toPersianNumber(author)}
            </p>
          </Link>
          <p className="  text-sm pl-3">|</p>
          <p className="  text-sm whitespace-nowrap text-ellipsis overflow-hidden">
            {toPersianNumber(date)}
          </p>
        </div>

        <ReactMarkdown
          className=" text-[15px] text-right"
          components={{
            img: function ({ ...props }) {
              const srcText = props.src;
              const dotIndex = srcText.split("").indexOf(".");
              const mediaFormat = srcText.split("").splice(dotIndex).join("");
              if (mediaFormat === ".mp4") {
                const substrings = props.alt?.split("{{");
                const alt = substrings[0].trim();
                return (
                  <video
                    width="350"
                    height="100"
                    controls
                    className="my-5 mx-auto"
                  >
                    <source src={props.src} type="video/mp4"></source>
                  </video>
                );
              } else if (
                mediaFormat === ".jpg" ||
                mediaFormat === ".webp" ||
                mediaFormat === ".png" ||
                mediaFormat === ".jfif"
              ) {
                const substrings = props.alt?.split("{{");
                const alt = substrings[0].trim();

                return (
                  <Image
                    src={props.src}
                    alt={alt}
                    width={350}
                    height={100}
                    className="my-5 mx-auto"
                  />
                );
              }
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
