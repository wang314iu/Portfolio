import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";

const Skills = () => {
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

  const skill: { [key: string]: string } = {
    TypeScript: "",
    Javascript: "",
    React: "",
    "Next.js": "",
    Angular: "",
    Ionic: "",
    Agile: "",
    Responsive: "",
    Node: "",
    "UI/UX": "",
    HTML: "",
    CSS: "",
    Tailwind: "",
    Bootstrap: "",
    "Material UI": "",
    Jest: "",
    Redux: "",
    Rxjs: "",
    ChakraUI: "",
    Database: "",
    Accessability: "",
  };

  const onSelectStyle = (key: string) => {
    const content = skill[key];
    alert(content);
  };

  return (
    <div className="h-screen w-screen flex flex-row items-center bg-gradient-to-r from-green-700 px-1/24 lg:px-1/12">
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
          containerClass: "m-0",
          itemClass: "hover:cursor-pointer",
        })}
        onClick={(tag: string, ev: MouseEvent) => onSelectStyle(tag)}
        onClickOptions={{ passive: true }}
      >
        {Object.keys(skill)}
      </TagCloud>
      <div></div>
    </div>
  );
};

export default Skills;
