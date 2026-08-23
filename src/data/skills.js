import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/js.png";
import react from "../assets/icons/react.webp";
import tailwind from "../assets/icons/tailwind.webp";

import c from "../assets/icons/c.png";
import python from "../assets/icons/python.png";
import sql from "../assets/icons/mysql.png";

import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import figma from "../assets/icons/figma.png";

import photoshop from "../assets/icons/photoshop.png";
import premiere from "../assets/icons/premierepro.png";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
    ],
  },

  {
    category: "Programming",
    items: [
      { name: "C", icon: c },
      { name: "Python", icon: python },
      { name: "SQL", icon: sql },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Figma", icon: figma },
    ],
  },

  {
    category: "Creative",
    items: [
      { name: "Adobe Photoshop", icon: photoshop },
      { name: "Adobe Premiere Pro", icon: premiere },
    ],
  },
];