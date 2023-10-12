import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getSortedPostsData(topicDirectory) {
  const postsDirectory = path.join(process.cwd(), topicDirectory);
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        id,
        ...matterResult.data,
      };
    });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return +1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id, topicDirectory) {
  const postsDirectory = path.join(process.cwd(), topicDirectory);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content;
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

///

export function getAllTags(topicDirectory) {
  let tag = topicDirectory.map((directory) => {
    const postsDirectory = path.join(process.cwd(), directory);
    const fileNames = fs.readdirSync(postsDirectory);
    const data = fileNames.map((fileName) => {
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return [...matterResult.data.tags];
    });
    return data;
  });
  const tags = tag.flat(2);
  return tags.filter(function (item, pos) {
    return tags.indexOf(item) == pos;
  });
}

export function getPostsWithTag(topicDirectory, tagName) {
  const fullPaths = topicDirectory.map((directory) => {
    const postsDirectory = path.join(process.cwd(), directory);
    const fileNames = fs.readdirSync(postsDirectory);
    const fullPaths = fileNames.map((fileName) => {
      return path.join(directory, fileName);
    });
    return fullPaths;
  });
  return fullPaths
    .flat()
    .filter((fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const postTags = [...matterResult.data.tags];
      return postTags.includes(tagName);
    })
    .map((fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      let id = fullPath.replace(/\.md$/, "");
      id = id
        .split("")
        .splice(id.indexOf("\\", 6) + 1)
        .join("");
      return {
        id,
        ...matterResult.data,
      };
    });
}

///

export function getTagsWithTerm(topicDirectory, term) {
  return getAllTags(topicDirectory)
    .map((tag) => {
      return tag.split(" ");
    })
    .filter((tag) => {
      return tag.includes(term);
    })
    .map((tag) => {
      return tag.join(" ");
    });
}

export function getContentsWithTerm(topicDirectory, term) {
  const fullPaths = topicDirectory.map((directory) => {
    const postsDirectory = path.join(process.cwd(), directory);
    const fileNames = fs.readdirSync(postsDirectory);
    const fullPaths = fileNames.map((fileName) => {
      return path.join(directory, fileName);
    });
    return fullPaths;
  });
  return fullPaths
    .flat()
    .filter((fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const contentHtml = matterResult.content;
      return contentHtml.includes(term);
    })
    .map((fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      let id = fullPath.replace(/\.md$/, "");
      id = id
        .split("")
        .splice(id.indexOf("\\", 6) + 1)
        .join("");
      return {
        id,
        ...matterResult.data,
      };
    });
}

export function getAuthorsWithTerm(topicDirectory, term) {
  const fullPaths = topicDirectory.map((directory) => {
    const postsDirectory = path.join(process.cwd(), directory);
    const fileNames = fs.readdirSync(postsDirectory);
    const fullPaths = fileNames.map((fileName) => {
      return path.join(directory, fileName);
    });
    return fullPaths;
  });
  let authors = fullPaths
    .flat()
    .map((fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return [matterResult.data.author];
    })
    .flat();

  return authors
    .filter(function (item, pos) {
      return authors.indexOf(item) == pos;
    })
    .filter((author) => {
      return (
        author.toLowerCase().split(" ").includes(term.toLowerCase()) ||
        author.toLowerCase().includes(term.toLowerCase())
      );
    });
}
