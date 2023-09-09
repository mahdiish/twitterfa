import socialImg from "../images/main-page/social.jpg";
import politicImg from "../images/main-page/politic.jpg";
import militaryImg from "../images/main-page/military.jpg";
import sportImg from "../images/main-page/sport.jpg";
import economicImg from "../images/main-page/economic.jpg";
import technologyImg from "../images/main-page/technology.jpg";
import artImg from "../images/main-page/art.jpg";
import tourismImg from "../images/main-page/tourism.jpg";
import { getSortedPostsData } from "../../lib/posts";

//
const allSocialPostsData = getSortedPostsData("posts/social");
let socialContents = [];
let socialAuthors = [];
for (let i = 0; i < 5; i++) {
  socialContents[i] = allSocialPostsData[i].title;
  socialAuthors[i] = allSocialPostsData[i].author;
}
//
const allPoliticPostsData = getSortedPostsData("posts/politic");
let politicContents = [];
let politicAuthors = [];
for (let i = 0; i < 5; i++) {
  politicContents[i] = allPoliticPostsData[i].title;
  politicAuthors[i] = allPoliticPostsData[i].author;
}
//
const allMilitaryPostsData = getSortedPostsData("posts/military");
let militaryContents = [];
let militaryAuthors = [];
for (let i = 0; i < 5; i++) {
  militaryContents[i] = allMilitaryPostsData[i].title;
  militaryAuthors[i] = allMilitaryPostsData[i].author;
}
//
const allSportPostsData = getSortedPostsData("posts/sport");
let sportContents = [];
let sportAuthors = [];
for (let i = 0; i < 5; i++) {
  sportContents[i] = allSportPostsData[i].title;
  sportAuthors[i] = allSportPostsData[i].author;
}
//
const allEconomicPostsData = getSortedPostsData("posts/economic");
let economicContents = [];
let economicAuthors = [];
for (let i = 0; i < 5; i++) {
  economicContents[i] = allEconomicPostsData[i].title;
  economicAuthors[i] = allEconomicPostsData[i].author;
}
//
const allTechnologyPostsData = getSortedPostsData("posts/technology");
let technologyContents = [];
let technologyAuthors = [];
for (let i = 0; i < 5; i++) {
  technologyContents[i] = allTechnologyPostsData[i].title;
  technologyAuthors[i] = allTechnologyPostsData[i].author;
}
//
const allArtPostsData = getSortedPostsData("posts/art");
let artContents = [];
let artAuthors = [];
for (let i = 0; i < 5; i++) {
  artContents[i] = allArtPostsData[i].title;
  artAuthors[i] = allArtPostsData[i].author;
}
//
const allTourismPostsData = getSortedPostsData("posts/tourism");
let tourismContents = [];
let tourismAuthors = [];
for (let i = 0; i < 5; i++) {
  tourismContents[i] = allTourismPostsData[i].title;
  tourismAuthors[i] = allTourismPostsData[i].author;
}
//

export const topicData = [
  {
    title: "اجتماعی",
    imageSrc: socialImg,
    contents: socialContents,
    authors: socialAuthors,
  },
  {
    title: "سیاسی",
    imageSrc: politicImg,
    contents: politicContents,
    authors: politicAuthors,
  },
  {
    title: "نظامی",
    imageSrc: militaryImg,
    contents: militaryContents,
    authors: militaryAuthors,
  },
  {
    title: "ورزشی",
    imageSrc: sportImg,
    contents: sportContents,
    authors: sportAuthors,
  },
  {
    title: "اقتصادی",
    imageSrc: economicImg,
    contents: economicContents,
    authors: economicAuthors,
  },
  {
    title: "تکنولوژی",
    imageSrc: technologyImg,
    contents: technologyContents,
    authors: technologyAuthors,
  },
  {
    title: "هنر",
    imageSrc: artImg,
    contents: artContents,
    authors: artAuthors,
  },
  {
    title: "گردشگری",
    imageSrc: tourismImg,
    contents: tourismContents,
    authors: tourismAuthors,
  },
];
