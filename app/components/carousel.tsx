import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface Props {
  images: string[];
  descriptions: string[];
}
const Carousel = ({ images, descriptions }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="width-full mx-auto relative">
      <div className="flex items-center justify-center  overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="project"
          className="w-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <IconButton
          onClick={prevSlide}
          disabled={currentIndex === 0}
          size="medium"
        >
          <IoIosArrowDropleftCircle
            style={{ color: currentIndex === 0 ? "transparent" : "lightgray" }}
          />
        </IconButton>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <IconButton
          onClick={nextSlide}
          disabled={currentIndex === images.length - 1}
          size="medium"
        >
          <IoIosArrowDroprightCircle
            style={{
              color:
                currentIndex === images.length - 1
                  ? "transparent"
                  : "lightgray",
            }}
          />
        </IconButton>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === idx ? "bg-gray-400" : "bg-gray-800"
            }`}
          />
        ))}
      </div>
      <div style={{ minHeight: "45px", padding: "10px 10px 0 10px" }}>
        {descriptions.length > 0 && (
          <Typography
            variant="body2"
            style={{
              color: "lightgray",
            }}
          >
            {descriptions[currentIndex]}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Carousel;
