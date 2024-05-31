import Paper from "@mui/material/Paper";

const Skills = () => {
  const skills = [
    {
      title: "Web Technologies",
      content:
        "HTML5, CSS3, Sass, Bootstrap, AJAX, jQuery, JSON, Restful API, Node.js, React, Tailwind",
    },
    {
      title: "Frameworks",
      content: "Angular, AngularJS, Next.js, Express.js, Martini",
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
        "NPM, WebPack,Babel, Gulp, XML, Docker, Mysql Workbench, Redux, NgRx, RxJS, Lodash, Nginx",
    },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold">Skills</h3>
      <div>
        {skills.map(({ title, content }) => (
          <Paper elevation={3} className="bg-black text-blue-600">
            <h4>{title}</h4>
            <p>{content}</p>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Skills;
