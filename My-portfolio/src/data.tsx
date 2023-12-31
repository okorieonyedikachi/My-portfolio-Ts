import gallery from "./assets/gallery.png"
import rick from "./assets/rickandmorty.png"
import calc from './assets/calc.png'
import movie from './assets/screenshot.jpg'
import Github from "./assets/github.png";
import IG from "./assets/instagram.svg";
import LinkedIn from "./assets/linkedin.png";
import Twitter from "./assets/twitter.svg";

export  const projectData = [
  {
    image: gallery,
    link: "https://drag-drop-app-five.vercel.app",
    details:
      "This is a Drag-and-Drop Gallery web-app built with React and Typescript that allows users to explore images using the image tags on the search filter and easily rearrange the images, using the drag-n-drop functionality.",
  },
  {
    image: rick,
    link: "https://github.com/okorieonyedikachi/RickandMorty-Ts",
    details:
      "A website that displays the characters, episodes and locations in Rick and Morty. React, Typescript, and GraphQL were the foundational technologies employed to develop this project.",
  },
  {
    image: movie,
    link: "https://hng-task2-liart.vercel.app",
    details:
      "This is a movie discovery web application built React and Typescript, allows users to search for movies, view movie details, and save their favorite movies. It consumes movie data from the TMDB API.",
  },
  { image: calc, link: "https://github.com/okorieonyedikachi/Calculator-", details: "A mini calculatorbuilt with Javascript"},
];

export const aboutMe = "A photographer turned Frontend developer"

export const skills = [
  { text: "HTML / CSS" },
  { text: "JAVASCRIPT / TYPESCRIPT" },
  { text: "TAILWINDCSS" },
  { text: "REACTJS / NEXTJS" },
  { text: "EXPRESSJS" },
  { text: "GIT / GITHUB" },
  { text: "FIREBASE" },
  { text: "GRAPHQL" },
];

export const socials = [
  { icon: Github, link: "https://github.com/okorieonyedikachi" },
  { icon: IG, link: "https://www.instagram.com/_rav33n/" },
  { icon: LinkedIn, link: "http://www.linkedin.com/in/onyedikachi-okorie" },
  {
    icon: Twitter,
    link: "https://twitter.com/chairo_no_me?s=21&t=pw2PBzI69rFvp6b5LNormg",
  },
];