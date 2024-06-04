"use client";
import Intro from "./components/intro";
import Gallery from "./components/gallery";
// import Skills from "./components/skills";
import { useState } from "react";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <main className="min-h-screen flex flex-col mb-14 bg-black text-white ">
      <Intro setShowGallery={() => !showGallery && setShowGallery(true)} />
      {/* <Skills /> */}
      {showGallery && <Gallery showGallery={showGallery} />}
    </main>
  );
}
