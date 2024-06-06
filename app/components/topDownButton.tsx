"use client";
import { TbSquareArrowUpFilled, TbSquareArrowDownFilled } from "react-icons/tb";
import { PiArrowFatUp, PiArrowFatDown } from "react-icons/pi";
import { IconButton } from "@mui/material";
interface Props {
  scrollToIndex: (index: number) => void;
}
const TopDownButton = ({ scrollToIndex }: Props) => {
  return (
    <div className="fixed right-0 top-0 bottom-0 z-50 w-[60px] flex flex-col justify-center align-middle">
      <IconButton aria-label="up" size="large" onClick={() => scrollToIndex(0)}>
        <PiArrowFatUp className=" text-green-700" />
      </IconButton>
      <IconButton
        aria-label="down"
        size="large"
        onClick={() => scrollToIndex(1)}
      >
        <PiArrowFatDown className=" text-green-700" />
      </IconButton>
    </div>
  );
};

export default TopDownButton;
