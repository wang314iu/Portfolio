"use client";

import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import React, { useState } from "react";
import { skillTags } from "../constants";
import SkillDialog from "./skillDialog";
import { TypeAnimation } from "react-type-animation";

const Skills = () => {
  const [[tag, description], setContent] = useState(["", ""]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const onSelectTag = (tag: string) => {
    setContent([tag, skillTags[tag]]);
    setOpen(true);
  };
  return (
    <>
      <div
        className={`h-full w-full flex flex-col items-center bg-gradient-to-r from-green-700 lg:px-[6%] transition-all duration-500 ease-in-out justify-center`}
      >
        <div
          className={`transition-all duration-1000 ease-out ${
            open && "scale-90 lg:scale-110"
          }`}
        >
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: "normal",
              containerClass: "w-fill",
              itemClass: "hover:cursor-pointer font-bold tracking-wider",
            })}
            onClick={(tag: string, ev: MouseEvent) => onSelectTag(tag)}
            onClickOptions={{ passive: true }}
          >
            {Object.keys(skillTags)}
          </TagCloud>
        </div>
        <TypeAnimation
          sequence={["Click on a tag to view details", 200]}
          speed={90}
          cursor={true}
          repeat={0}
          style={{
            textShadow: "2px 2px green",
          }}
          className="text-md font-extrabold font-mono tracking-wider self-center lg:self-end mt-6"
        />
      </div>
      <SkillDialog
        title={tag}
        open={open}
        handleClose={handleClose}
        content={description.split(",").map((x) => x.trim())}
      />
    </>
  );
};

export default Skills;
