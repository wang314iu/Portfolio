"use client";
import Intro from "./components/intro";
import Gallery from "./components/gallery";
import Skills from "./components/skills";
import { useState } from "react";
// import { TbSquareArrowUpFilled, TbSquareArrowDownFilled } from "react-icons/tb";
// import { PiArrowFatUp, PiArrowFatDown } from "react-icons/pi";
// import { IconButton } from "@mui/material";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [currentSection, setCurrentSection] = useState("intro");

  const SECTIONS = ["intro", "skills", "projects"];

  const onScroll = (e: any) => {
    console.log(scroll);
    const { scrollTop, clientHeight } = e.target;
    const nextIdx = Math.round(scrollTop / clientHeight);

    if (SECTIONS[nextIdx] != currentSection) {
      setCurrentSection(SECTIONS[nextIdx]);
    }
  };

  const scrollToSection = (section: string) => {
    if (!window || !window.document) return;

    window.document
      .getElementById(section)!
      .scrollIntoView({ behavior: "smooth" });

    setCurrentSection(section);
  };

  return (
    <main
      className=" bg-black text-white"
      onScroll={onScroll}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* navigation */}
      <div
        className="text-white bg-black fixed top-0 left-0 w-full h-[60px] z-50 flex items-center justify-center"
        role="presentation"
      >
        <Breadcrumbs aria-label="breadcrumb" className="text-white">
          <Button
            className={` ${
              currentSection === "intro" && "text-green-600"
            } hover:text-green-600`}
            color="inherit"
            onClick={() => scrollToSection("intro")}
          >
            Intro
          </Button>
          <Button
            className={`${
              currentSection === "skills" && "text-green-600"
            } hover:text-green-600`}
            color="inherit"
            value="skills"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Button>
          <Button
            className={`${
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
      <div id="intro" style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <Intro setShowGallery={() => !showGallery && setShowGallery(true)} />
      </div>
      <div id="skills" style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <Skills />
      </div>
      <div id="projects" style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <Gallery showGallery={true} />
        {/* </div>
      <div className="fixed right-0 top-0 bottom-0 z-50 w-[60px] flex flex-col justify-center align-middle">
        <IconButton
          aria-label="up"
          size="large"
          onClick={() => scrollToIndex(0)}
        >
          <PiArrowFatUp className=" text-green-700" />
        </IconButton>
        <IconButton
          aria-label="down"
          size="large"
          onClick={() => scrollToIndex(1)}
        >
          <PiArrowFatDown className=" text-green-700" />
        </IconButton> */}
      </div>
    </main>
  );
}
