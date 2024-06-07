import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";

interface Props {
  currentSection: string;
  scrollToSection: (section: string) => void;
}

const TopNav = ({ currentSection, scrollToSection }: Props) => {
  return (
    <div
      className="text-white bg-black fixed top-0 left-0 w-full h-[60px] z-50 flex items-center justify-center  "
      role="presentation"
    >
      <Breadcrumbs aria-label="breadcrumb" className="text-white">
        <Button
          className={`font-semibold ${
            currentSection === "intro" && "text-green-600"
          } hover:text-green-600`}
          color="inherit"
          onClick={() => scrollToSection("intro")}
        >
          Intro
        </Button>
        <Button
          className={`font-semibold ${
            currentSection === "skills" && "text-green-600"
          } hover:text-green-600`}
          color="inherit"
          value="skills"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </Button>
        <Button
          className={`font-semibold ${
            currentSection === "projects" && "text-green-600"
          } hover:text-green-600`}
          color="inherit"
          onClick={() => scrollToSection("projects")}
          value="projects"
        >
          Projects
        </Button>
      </Breadcrumbs>
    </div>
  );
};

export default TopNav;
