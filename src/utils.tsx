import ReactIcon from "./components/icons/ReactIcon";
import JavaScriptIcon from "./components/icons/JavaScriptIcon";
import TailwindIcon from "./components/icons/TailwindIcon";
import NextIcon from "./components/icons/NextIcon";
import MongoIcon from "./components/icons/MongoIcon";
import FigmaIcon from "./components/icons/FigmaIcon";
import TSIcon from "./components/icons/TSIcon";
import FirebaseIcon from "./components/icons/FirebaseIcon";
import SASSIcon from "./components/icons/SASSIcon";
import ShopifyIcon from "./components/icons/ShopifyIcon";
import ReduxIcon from "./components/icons/ReduxIcon";
import GraphQLIcon from "./components/icons/GraphQLIcon";

export interface Project {
  name: string;
  image: string;
  description: string;
  siteUrl: string;
  gitHubUrl: string;
  skills: Skill[];
  hue?: number;
}

type Skill = { icon: React.ReactNode; name: string };

export const projectsList: Project[] = [
  {
    name: "Millimetre",
    image: "/images/millimetre_v3.png",
    description:
      "Discover new and lesser seen films with Millimetre! Sign up and find your new favourite film, record your thoughts in notes and add films to your watchlist. A fullstack application using the power of NextJS, React and MongoDB to build a new, exciting website for film enthusiasts. This is a project I plan to continue to work on in the future...",
    siteUrl: "https://mmillimetre.com",
    gitHubUrl: "https://github.com/meowy8/millimetre_v3",
    skills: [
      { icon: <ReactIcon />, name: "React" },
      { icon: <JavaScriptIcon />, name: "JavaScript" },
      { icon: <TailwindIcon />, name: "Tailwind" },
      { icon: <NextIcon />, name: "Next.js" },
      { icon: <MongoIcon />, name: "MongoDB" },
      { icon: <FigmaIcon />, name: "Figma" },
      { icon: <TSIcon />, name: "TypeScript" },
    ],
  },
  {
    name: "Millimetre (Old)",
    image: "/images/millimetre-screenshot.png",
    description:
      "Start your journey into experimental cinema! Create a profile and add films to your watched list as you make your way through the catalogue. Add your thoughts in a note for each film so others can see. Uses the TMDB API along with a custom database using Firebase.",
    siteUrl: "https://millimetredemo.netlify.app/",
    gitHubUrl: "https://github.com/meowy8/millimetre",
    skills: [
      { icon: <ReactIcon />, name: "React" },
      { icon: <JavaScriptIcon />, name: "JavaScript" },
      { icon: <TailwindIcon />, name: "Tailwind" },
      { icon: <FirebaseIcon />, name: "Firebase" },
    ],
  },
  {
    name: "The Cache",
    image: "/images/the-cache-screenshot.png",
    description:
      "The Cache is a modern  e-commerce platform built with React and TypeScript. With intuitive navigation and sleek design, users can effortlessly browse through a wide range of products.",
    siteUrl: "https://shopify-project-chi.vercel.app/",
    gitHubUrl: "https://github.com/meowy8/shopify_project",
    skills: [
      { icon: <ReactIcon />, name: "React" },
      { icon: <JavaScriptIcon />, name: "JavaScript" },
      { icon: <TSIcon />, name: "TypeScript" },
      { icon: <SASSIcon />, name: "SASS" },
      { icon: <NextIcon />, name: "Next.js" },
      { icon: <ShopifyIcon />, name: "Shopify" },
      { icon: <ReduxIcon />, name: "Redux" },
      { icon: <GraphQLIcon />, name: "GraphQL" },
    ],
  },
  {
    name: "Photography Portfolio",
    image: "/images/photoPortScreenshot.png",
    description:
      "A simple portfolio website to host some of my own photography. Created using React and Next.js.",
    siteUrl: "https://micheal-photography-portfolio.netlify.app/",
    gitHubUrl: "https://github.com/meowy8/photography-portfolio",
    skills: [
      { icon: <ReactIcon />, name: "React" },
      { icon: <JavaScriptIcon />, name: "JavaScript" },
      { icon: <TailwindIcon />, name: "Tailwind" },
      { icon: <NextIcon />, name: "Next.js" },
    ],
  },
];

export const colourChanger = (hue: number) => {
  hue++;
  return hue;
};
