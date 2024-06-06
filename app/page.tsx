"use client";
import Intro from "./components/intro";
import Gallery from "./components/gallery";
import Skills from "./components/skills";
import { useState } from "react";
import * as React from "react";
import TopNav from "./components/topNav";

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
      <TopNav
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />
      <div id="intro" style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <Intro setShowGallery={() => !showGallery && setShowGallery(true)} />
      </div>
      <div id="skills" style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <Skills />
      </div>
      <div id="projects" style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <Gallery showGallery={true} />
      </div>
    </main>
  );
}
