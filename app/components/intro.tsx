"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { email, linkedIn, profileName, intro } from "../constants";

interface Props {
  setShowGallery: () => void;
}

const Intro = ({ setShowGallery }: Props) => {
  const [showOverview, setShowOverview] = useState(false);
  const [showContact, setShowContact] = useState(false);
  // const [showNext, setShowNext] = useState(false);

  const onDownloadResume = () => {
    window.open("Alice_Wang_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      style={{ backgroundImage: `url("img/cyberDuck.gif")` }}
      className="w-screen h-screen flex items-center text-center sm:text-left bg-repeat"
    >
      <div className="m-auto h-content w-11/12 lg:w-10/12">
        <TypeAnimation
          sequence={[profileName, 200, () => setShowOverview(true)]}
          speed={80}
          cursor={false}
          repeat={0}
          style={{
            textShadow: "2px 2px green",
          }}
          className="text-3xl sm:text-5xl font-extrabold font-mono tracking-wider mb-5 md:mb-8 block"
        />
        {showOverview && (
          <TypeAnimation
            sequence={[
              intro,
              200,
              () => {
                setShowContact(true);
                setTimeout(() => setShowGallery(), 800);
              },
            ]}
            splitter={(str) => str.split(/(?= )/)}
            speed={90}
            style={{
              textShadow: "2px 2px green",
              whiteSpace: "pre-line",
              textAlign: "left",
            }}
            className="text-xs md:text-base xl:text-lg mb-5"
            repeat={0}
          />
        )}
        <br />
        <div
          className={`${
            showContact
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-80"
          } transition-all duration-700 ease-in`}
        >
          <button
            onClick={onDownloadResume}
            className="font-medium m-4 ml-0 text-sm sm:text-ml w-11/12 sm:w-fit px-5 py-1 sm:py-2 rounded-full bg-green-800 hover:bg-black hover:text-emerald-500"
          >
            Resume
          </button>
          <p className="py-2 text-s text-wrap">
            <span>
              Email:&nbsp;
              <a className="underline" href={`mailTo:${email}`}>
                {email}
              </a>
            </span>
            &nbsp;|&nbsp;
            <a
              className="underline"
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
