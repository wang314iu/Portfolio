const projects = [
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
# Expertise in developing web applications with React and Angular. Familiar with MEAN stack. Have profound experience with modern web technologies and terms.
# Proficient working with frameworks Angular, Ionic, Next.js, React, Tailwind, Bootstrap, Material UI, ChakraUI. 
# Solid knowledge with web technologies HTTP, Typescript, JavaScript, Jquery, HTML, CSS, Web APIs and JSON. 
# Having experience implement backend business logics, APIs and working with MySQL database.
# Experienced working with development tools TFS, Git, NPM, Yarn, Jenkins, Docker. Understand Gulp and Webpack.
# Experienced working under Agile Scrum and waterfall environment.
# Good written and verbal communication and problem-Solving skills.`;

export { projects, email, linkedIn, profileName, intro };
