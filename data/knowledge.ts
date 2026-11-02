import { KnowledgeSection } from "../types/data";

export const knowledge: KnowledgeSection[] = [
  {
    title: "Education",
    items: [
      {
        title: "UX Designer Upskill",
        resume: true,
        text: "Hyper Island",
        footer: "October 2023 — May 2024",
      },
      {
        title: "Technical assistant in Digital Graphic Design",
        text: "CENSA",
        footer: "October 2017 — June 2018",
      },
      {
        title: "Systems engineering (undergraduate)",
        resume: true,
        text: "Universidad Nacional de Colombia",
        footer: "January 2007 — January 2010",
      },
    ],
  },
  {
    title: "Courses",
    items: [
      {
        title: "Platzi",
        text: [
          ["JavaScript Backend Career", "80 Hours, March 2019"],
          ["English Career", "80 Hours, March 2019"],
          ["Frontend Architect Career", "80 Hours, December 2018"],
        ],
      },
    ],
  },
  {
    title: "Seminars",
    items: [
      {
        title: "Agiles.org",
        text: "VII Latin American Workshops on Agile Methodologies",
        footer: "24 Hours, October 2014",
      },
      {
        title: "Campus Party Colombia",
        text: [
          ["Campus Party 7 Colombia", "300 Hours, June 2014"],
          ["Campus Party 6 Colombia", "250 Hours, October 2013"],
          ["Campus Party 4 Colombia", "521 Hours, July 2011"],
        ],
      },
      {
        title: "Google",
        text: "Google Developer Bus Bogota",
        footer: "36 Hours, November 2013",
      },
    ],
  },
];
