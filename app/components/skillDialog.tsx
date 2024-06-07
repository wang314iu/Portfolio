import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import SkillRating from "./skillRating";
import { rates } from "../constants";
import { IconButton, Slide, Drawer } from "@mui/material";
import { IoMdClose } from "react-icons/io";

interface Props {
  handleClose: () => void;
  open: boolean;
  content: string[];
  title: string;
}

const SkillDialog = ({ open, handleClose, content, title }: Props) => {
  return (
    <Drawer open={open} onClose={handleClose}>
      <div className="min-w-[300px] md:min-w-[40vw] h-full py-8 px-6 bg-black text-white">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: (theme) => theme.palette.grey[400],
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <IoMdClose />
        </IconButton>
        <h4 className="text-xl font-bold mt-8 mb-6"> {title}</h4>
        {open && (
          <>
            {content.map((skill) => (
              <div key={skill} className="mb-3">
                {skill} <SkillRating rating={rates[skill]} />
              </div>
            ))}
          </>
        )}
      </div>
    </Drawer>
  );
};

export default SkillDialog;
