const projects = [
  {
    title: "Social Video Platform",
    tags: ["Angular18", "Angular Material", "rxjs", "Typescript"],
    imgUrls: [
      "img/socialVideoPlatform.png",
      "img/socialVideoPlatform2.png",
      "img/socialVideoPlatform5.png",
      "img/socialVideoPlatform3.png",
      "img/socialVideoPlatform4.png",
    ],
    descriptions: [
      "See videos shared by people across the world.",
      "Filter by keywords your are interested in.",
      "Put your mouse over the video to watch it.",
      "Find out the author of the video and how other people feel about it!",
      "See the comments of the video.",
    ],
    projectUrl: "https://social-video-platform-zeta.vercel.app/",
    sourceUrl: "https://github.com/wang314iu/SocialVideoPlatform",
  },
  {
    title: "Game Hub",
    imgUrls: [
      "img/gamehub.png",
      "img/gamehub2.jpg",
      "img/gamehub3.png",
      "img/gamehub4.png",
      "img/gamehub5.png",
      "img/gamehub6.png",
      "img/gamehub7.png",
      "img/gamehub8.png",
    ],
    descriptions: [
      "Gamehub navigates you to your favorite games.",
      "Provides you a light and dark theme.",
      "Find game you might interest in by genre.",
      "Search for games by name.",
      "Filter games by platform.",
      "Sort games by criteria.",
      "Check game platforms and rating. Click on the card to see more details.",
      "Display game details and useful links.",
    ],
    projectUrl: "https://alice-game-hub.vercel.app/",
    sourceUrl: "https://github.com/wang314iu/GameHub",
    tags: ["React", "Vite", "ChakraUI", "Typescript"],
  },
  {
    title: "Personal Portfolio",
    imgUrls: [
      "img/portfolio.png",
      "img/portfolio2.png",
      "img/portfolio3.png",
      "img/portfolio4.png",
      "img/portfolio5.png",
    ],
    descriptions: [
      "Check out who I am :D",
      "Find out how to reach out to me.",
      "My project to showcase my skills.",
      "Slide to see project snapshots and details.",
      "Checkout the live demo and source code!",
    ],
    sourceUrl: "https://github.com/wang314iu/Portfolio",
    tags: ["Next.js", "Tailwind", "Material UI", "Typescript"],
  },
  {
    imgUrls: ["img/workInProgress.jpeg"],
    title: "To be continued...",
    descriptions: [],
  },
];
const email = "wang314iu@gmai.com";
const linkedIn = "https://linkedin.com/in/alice-wang-9a9304192";

const profileName = "Alice Wang";
const intro = `# Over 5 years of professional experience involving full stages of SDLC for Web Applications.
# Proficient working with front end frameworks Angular, Ionic, Next.js, React, Tailwind, Bootstrap, Material UI, ChakraUI. 
# Skilled in building scalable, responsive solutions that are mobile-first and accessible.
# Familiar with UX/UI design and capable of creating prototypes for applications.
# Solid knowledge with web technologies HTTP, Typescript, JavaScript, Jquery, HTML, CSS, Web APIs and JSON. 
# Having experience implement backend business logics, APIs and working with MySQL database.
# Experienced working with development tools TFS, Git, NPM, Yarn, Jenkins, Docker. Understand Gulp and Webpack.
# Experienced working under Agile Scrum and waterfall environment.
# Good written and verbal communication and problem-Solving skills.`;

const skills: {
  title: string;
  content: string;
}[] = [
  {
    title: "Web Technologies",
    content:
      "HTML5, CSS3, Sass, Bootstrap, AJAX, jQuery, JSON, Restful API, Node.js, React, Tailwind",
  },
  {
    title: "Frameworks",
    content:
      "Angular, React, Next.js, Express.js, Tailwind, Bootstrap, Material UI, ChakraUI",
  },
  {
    title: "Databases",
    content: "MySQL, MongoDB, AWS S3",
  },
  {
    title: "Programming Languages",
    content: "Typescript, JavaScript, Java, C#, C++, Python, Golang, SQL",
  },
  {
    title: "Testing/Debugging",
    content:
      "Jest, Mocha, Jasmine, Karma, Postman, Fiddler, Chrome Developer Tools, React Developer Tools, Augury",
  },
  {
    title: "Version Control",
    content: "Git, TFS",
  },
  {
    title: "Others",
    content:
      "NPM, WebPack,Babel, Gulp, XML, Docker, Mysql Workbench, Redux, RxJS, Lodash, Nginx",
  },
];

const rates: { [key: string]: number } = {
  HTML: 58,
  CSS: 74,
  Sass: 62,
  AJAX: 68,
  jQuery: 79,
  "Restful API": 48,
  "Node.js": 69,
  axios: 55,
  Angular: 66,
  React: 50,
  "Next.js": 71,
  "Express.js": 73,
  Tailwind: 57,
  Bootstrap: 64,
  "Material UI": 76,
  ChakraUI: 70,
  MySQL: 61,
  MongoDB: 77,
  "AWS S3": 45,
  Typescript: 52,
  JavaScript: 78,
  Java: 49,
  "C#": 56,
  "C++": 67,
  Python: 59,
  Golang: 80,
  SQL: 60,
  Jest: 75,
  Mocha: 41,
  Jasmine: 65,
  Karma: 44,
  Postman: 47,
  Fiddler: 53,
  "Chrome Developer Tools": 69,
  "React Developer Tools": 72,
  Augury: 54,
  Git: 55,
  TFS: 63,
  NPM: 42,
  WebPack: 51,
  Babel: 70,
  Gulp: 43,
  XML: 66,
  Docker: 74,
  "Mysql Workbench": 79,
  Redux: 48,
  RxJS: 62,
  Lodash: 58,
  Nginx: 77,
  Agile: 60,
  Scrum: 57,
  Waterfall: 45,
};

const skillTags: { [key: string]: string } = {
  "Web Technologies":
    "HTML, CSS, Sass, AJAX, jQuery, Restful API, Node.js, axios",
  Frameworks: "Angular, React, Next.js, Express.js",
  "CSS Frameworks": "Tailwind, Bootstrap, Material UI, ChakraUI",
  Databases: "MySQL, MongoDB, AWS S3",
  "Programming Languages":
    "Typescript, JavaScript, Java, C#, C++, Python, Golang, SQL",
  "Testing/Debugging":
    "Jest, Mocha, Jasmine, Karma, Postman, Fiddler, Chrome Developer Tools, React Developer Tools, Augury",
  "Version Control": "Git, TFS",
  Others:
    "NPM, WebPack,Babel, Gulp, XML, Docker, Mysql Workbench, Redux, RxJS, Lodash, Nginx",
  Methodology: "Agile, Scrum, Waterfall",
};

export {
  projects,
  email,
  linkedIn,
  profileName,
  intro,
  skills,
  skillTags,
  rates,
};
