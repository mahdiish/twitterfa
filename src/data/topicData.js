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
for (let i = 0; i < 5; i++) {
  socialContents.push({
    title: allSocialPostsData[i].title,
    author: allSocialPostsData[i].author,
    id: allSocialPostsData[i].id,
    topic: allSocialPostsData[i].topic,
  });
}
//
const allPoliticPostsData = getSortedPostsData("posts/politic");
let politicContents = [];
for (let i = 0; i < 5; i++) {
  politicContents.push({
    title: allPoliticPostsData[i].title,
    author: allPoliticPostsData[i].author,
    id: allPoliticPostsData[i].id,
    topic: allPoliticPostsData[i].topic,
  });
}
//
const allMilitaryPostsData = getSortedPostsData("posts/military");
let militaryContents = [];
for (let i = 0; i < 5; i++) {
  militaryContents.push({
    title: allMilitaryPostsData[i].title,
    author: allMilitaryPostsData[i].author,
    id: allMilitaryPostsData[i].id,
    topic: allMilitaryPostsData[i].topic,
  });
}
//
const allSportPostsData = getSortedPostsData("posts/sport");
let sportContents = [];
for (let i = 0; i < 5; i++) {
  sportContents.push({
    title: allSportPostsData[i].title,
    author: allSportPostsData[i].author,
    id: allSportPostsData[i].id,
    topic: allSportPostsData[i].topic,
  });
}
//
const allEconomicPostsData = getSortedPostsData("posts/economic");
let economicContents = [];
for (let i = 0; i < 5; i++) {
  economicContents.push({
    title: allEconomicPostsData[i].title,
    author: allEconomicPostsData[i].author,
    id: allEconomicPostsData[i].id,
    topic: allEconomicPostsData[i].topic,
  });
}
//
const allTechnologyPostsData = getSortedPostsData("posts/technology");
let technologyContents = [];
for (let i = 0; i < 5; i++) {
  technologyContents.push({
    title: allTechnologyPostsData[i].title,
    author: allTechnologyPostsData[i].author,
    id: allTechnologyPostsData[i].id,
    topic: allTechnologyPostsData[i].topic,
  });
}
//
const allArtPostsData = getSortedPostsData("posts/art");
const artContents = [];
for (var i = 0; i < 5; i++) {
  artContents.push({
    title: allArtPostsData[i].title,
    author: allArtPostsData[i].author,
    id: allArtPostsData[i].id,
    topic: allArtPostsData[i].topic,
  });
}

//
const allTourismPostsData = getSortedPostsData("posts/tourism");
let tourismContents = [];
for (let i = 0; i < 5; i++) {
  tourismContents.push({
    title: allTourismPostsData[i].title,
    author: allTourismPostsData[i].author,
    id: allTourismPostsData[i].id,
    topic: allTourismPostsData[i].topic,
  });
}
//

export const topicData = [
  {
    title: "اجتماعی",
    imageSrc: socialImg,
    contents: socialContents,
    href: "/social",
  },
  {
    title: "سیاسی",
    imageSrc: politicImg,
    contents: politicContents,
    href: "/politic",
  },
  {
    title: "نظامی",
    imageSrc: militaryImg,
    contents: militaryContents,
    href: "/military",
  },
  {
    title: "ورزشی",
    imageSrc: sportImg,
    contents: sportContents,
    href: "/sport",
  },
  {
    title: "اقتصادی",
    imageSrc: economicImg,
    contents: economicContents,
    href: "/economic",
  },
  {
    title: "تکنولوژی",
    imageSrc: technologyImg,
    contents: technologyContents,
    href: "/technology",
  },
  {
    title: "هنر",
    imageSrc: artImg,
    contents: artContents,
    href: "/art",
  },
  {
    title: "گردشگری",
    imageSrc: tourismImg,
    contents: tourismContents,
    href: "/tourism",
  },
];
