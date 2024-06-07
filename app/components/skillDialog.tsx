import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import SkillRating from "./skillRating";
import { rates } from "../constants";
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import { IoMdClose } from "react-icons/io";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface Props {
  handleClose: () => void;
  open: boolean;
  content: string[];
  title: string;
}

const SkillDialog = ({ open, handleClose, content, title }: Props) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className="h-full w-[90%] md:w-[60%] lg:w-[40%] bg-black text-white"
    >
      <DialogTitle className="bg-black text-white pr-8 pt-4">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 0,
          top: -5,
          color: (theme) => theme.palette.grey[400],
        }}
      >
        <IoMdClose />
      </IconButton>
      <DialogContent className="bg-black text-white">
        <DialogContentText className="text-inherit">
          {open && (
            <>
              {content.map((skill) => (
                <div key={skill} className="mb-3">
                  {skill} <SkillRating rating={rates[skill]} />
                </div>
              ))}
            </>
          )}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default SkillDialog;
