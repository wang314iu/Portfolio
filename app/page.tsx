"use client";
import Intro from "./components/intro";
import Gallery from "./components/gallery";
// import Skills from "./components/skills";
import { useState } from "react";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <main className="container flex min-h-screen flex-col bg-black text-white mx-auto mb-14">
      <Intro setShowGallery={() => !showGallery && setShowGallery(true)} />
      {/* <Skills /> */}
      {showGallery && <Gallery showGallery={showGallery} />}
    </main>
  );
}
