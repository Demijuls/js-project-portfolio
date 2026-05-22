import kidAgency from "../assets/kidAgency.png";
import randy from "../assets/randy.png";
import happyt from "../assets/happyt.png";
import movies from "../assets/movies.png";
import todolist from "../assets/todolist.png";
import weather from "../assets/weather.png";
import book from "../assets/bookclub.png";
import recipes from "../assets/recipes.png";
import business from "../assets/businessflor.png";

export const projects = [
  {
    name: "Kid Collective — Agency Website (LIA)",
    image: kidAgency,
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
    about:
      "Official portfolio site for an independent Stockholm creative agency. Built with React 19, TypeScript, and Tailwind CSS v4, featuring a scroll-driven parallax grid, clip-path hover reveal effects, infinite scroll with IntersectionObserver, and a full component library documented in Storybook. Deployed on Netlify with SPA routing.",
    netlify: "https://web-kid.netlify.app/",
    github: "https://github.com/Demijuls/kid-web",
  },
  {
    name: "Task randomizer (fullstack + pair project",
    image: randy,
    tags: [
      "React",
      "Zustand",
      "Styled Components",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    about:
      "Productivity app that eliminates decision fatigue — enter how much time you have and get a random quest matched to it. Features full authentication, a social friends feed, kudos, streak tracking, and a mood avatar that reflects your consistency. Frontend on Netlify, backend on Render, database on MongoDB Atlas.",
    netlify: "https://julia-nicolina.netlify.app/",
    github: "https://github.com/Demijuls/task-randomizer",
  },
  {
    name: "Happy Thoughts (Fulstack)",
    image: happyt,
    tags: [
      "React",
      "Vite",
      "Styled Components",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
    ],
    about:
      "Social messaging app where users post, like, edit, and delete short happy thoughts. Includes optimistic UI updates so the heart reacts instantly without waiting for the server, Lottie loading animations, live character count, and a full auth flow. Built with a custom REST API backend. Frontend and backend lives in different repositories, if you'd like to see the backend, you can find it here: https://github.com/Demijuls/js-project-api",
    netlify: "https://happy-thoughts-byjd.netlify.app/",
    github: "https://github.com/Demijuls/js-project-happy-thoughts",
  },
  {
    name: "Movie Wall (Frontend, API integration)",
    image: movies,
    tags: ["React", "Styled Components", "TMDB API"],
    about:
      "Movie browsing app that fetches live data from The Movie Database API using Bearer Token authentication. Browse popular films, click through to a detail page with a full-bleed backdrop image background, genre tags, rating, and overview. Fully responsive across mobile and desktop.",
    netlify: "https://movieproject-technigo.netlify.app/",
    github: "https://github.com/Demijuls/js-project-movies",
  },
  {
    name: "To-Do App (Frontend, State management)",
    image: todolist,
    tags: ["React", "Zustand", "Styled Components"],
    about:
      "Task manager built to practice Zustand for global state. Add tasks with a name, priority category, and auto-generated timestamp; check off, delete, or complete all in one click. A live date display updates every minute without a page refresh, and completed tasks show with strikethrough styling.",
    netlify: "https://do-your-do.netlify.app/",
    github: "https://github.com/Demijuls/js-project-todo",
  },
  {
    name: "Weather app (Frontend,Team project)",
    image: weather,
    tags: ["TypeScript", "HTML5", "CSS3", "SMHI API", "Sunrise-Sunset API"],
    about:
      "Group weather app fetching live forecast data from the SMHI open API and sunrise/sunset times from a second API simultaneously. Displays current conditions, temperature, precipitation probability, and a dynamic 7-day forecast with auto-rotating weekday labels. The UI theme — background colour, text colour, and advice message — changes dynamically based on weather condition. Built in TypeScript with full interface definitions for all API responses.",
    netlify: "https://weather-app-rock-3.netlify.app/",
    github: "https://github.com/Demijuls/js-project-weather-app",
  },
  {
    name: "Bookclub subscription: Accessibility Project (Frontend, Team project)",
    image: book,
    tags: ["JavaScript", "HTML5", "CSS3", "ARIA", "WCAG AA"],
    about:
      "Book community site built entirely around WCAG AA accessibility standards. Implemented semantic HTML, ARIA roles and live regions, keyboard navigation with trapped focus on modals, skip-to-content link, screen reader compatibility, and a high-contrast mode toggle. Validated with WAVE and Lighthouse.",
    netlify: "https://the-reading-room-accesibility-project.netlify.app/",
    github: "https://github.com/Demijuls/js-project-accessibility",
  },
  {
    name: "Recipes library (Frontend, API integration)",
    image: recipes,
    tags: ["JavaScript", "HTML5", "CSS3"],
    about:
      "Recipe discovery app that fetches random recipes from the Spoonacular API and displays them in a browsable library format.",
    netlify: "https://juls-recipe-library.netlify.app/",
    github: "https://github.com/Demijuls/js-project-recipe-library",
  },
  {
    name: "Business site",
    image: business,
    tags: ["HTML5", "CSS3", "JavaScript"],
    about:
      "Responsive business site built with HTML validations, forms and product cards. First solo project at TechniGo.",
    netlify: "https://demijuls-technigo-project1.netlify.app/",
    github: "https://github.com/Demijuls/js-project-business-sitek",
  },
];
