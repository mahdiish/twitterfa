import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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
      const contentHtml = matterResult.content;
      return {
        id,
        ...matterResult.data,
        contentHtml,
      };
    });
  return allPostsData.sort((a, b) => {
    if (a.time < b.time) {
      return +1;
    } else {
      return -1;
    }
  });
}

export async function getPostsData(topicDirectory) {
  const postsDirectory = path.join(process.cwd(), topicDirectory);
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const contentHtml = matterResult.content;
      return {
        id,
        ...matterResult.data,
        contentHtml,
      };
    });
  return allPostsData.sort((a, b) => {
    if (a.time < b.time) {
      return +1;
    } else {
      return -1;
    }
  });
}

export function getSortedPostsDataTopics(topicDirectory) {
  let data = topicDirectory.map((directory) => {
    const postsDirectory = path.join(process.cwd(), directory);
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const contentHtml = matterResult.content;
      return { id, ...matterResult.data, contentHtml };
    });
  });
  return data.flat().sort((a, b) => {
    if (a.time < b.time) {
      return +1;
    } else {
      return -1;
    }
  });
}

export async function getPostsDataTopics(posts, postId) {
  const post = posts
    .filter((post) => {
      return post.id.includes(postId);
    })
    .map((post) => {
      return {
        title: post.title,
        date: post.date,
        author: post.author,
        authorId: post.authorId,
        link: post.link,
        tags: post.tags,
        contentHtml: post.contentHtml,
      };
    });
  return post[0];
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

export async function getPostsWithTag(topicDirectory, tagName) {
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
      id = id.split("\\").at(-1);
      return {
        id,
        ...matterResult.data,
      };
    });
}

///

export async function getTagsWithTerm(topicDirectory, term) {
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

export async function getContentsWithTerm(topicDirectory, term) {
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
      id = id.split("\\").at(-1);
      return {
        id,
        ...matterResult.data,
      };
    });
}

export async function getAuthorsWithTerm(topicDirectory, term) {
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

///

export function getAllAuthors(topicDirectory) {
  let author = topicDirectory.map((directory) => {
    const postsDirectory = path.join(process.cwd(), directory);
    const fileNames = fs.readdirSync(postsDirectory);
    const data = fileNames.map((fileName) => {
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return [matterResult.data.author];
    });
    return data;
  });
  const authors = author.flat(2);
  return authors.filter(function (item, pos) {
    return authors.indexOf(item) == pos;
  });
}

export async function getPostsWithAuthor(topicDirectory, authorName) {
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
      const postAuthors = [matterResult.data.author];
      return postAuthors.includes(authorName);
    })
    .map((fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      let id = fullPath.replace(/\.md$/, "");
      id = id.split("\\").at(-1);
      return {
        id,
        ...matterResult.data,
      };
    });
}
