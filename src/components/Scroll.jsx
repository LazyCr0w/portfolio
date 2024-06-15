import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./Scroll.css";

const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scroll-to-top">
      <button className="scroll-button" onClick={scrollToTop}>
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default Scroll;
