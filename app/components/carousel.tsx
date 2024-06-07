import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

interface Props {
  images: string[];
  descriptions: string[];
}
const Carousel = ({ images, descriptions }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const img = (
    <img
      src={images[currentIndex]}
      alt="project"
      className="w-full object-cover transition-transform duration-500 ease-in-out"
    />
  );
  const changeSlide = (newIndex: number) => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsSliding(false);
    }, 0); // duration of the slide effect
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  return (
    <div className="width-full mx-auto relative">
      <div className="flex items-center justify-center overflow-hidden">
        {img}
      </div>
      {/* slide buttons */}
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <IconButton
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="text-[24px] lg:text-[36px]"
        >
          <IoIosArrowDropleftCircle
            style={{ color: currentIndex === 0 ? "transparent" : "lightgrey" }}
          />
        </IconButton>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <IconButton
          onClick={nextSlide}
          disabled={currentIndex === images.length - 1}
          className="text-[24px] lg:text-[36px]"
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
