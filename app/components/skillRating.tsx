import { useEffect, useState } from "react";

const SkillRating = ({ rating }: { rating: number }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[12px] bg-transparent ">
      <div
        className="transition-all duration-500 ease-out h-full bg-gradient-to-r from-green-700 to-green-300"
        style={{ width: show ? `${rating}%` : "0%" }}
      ></div>
    </div>
  );
};

export default SkillRating;
