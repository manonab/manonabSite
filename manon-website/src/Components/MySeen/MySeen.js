import React from "react";
import ReactPageScroller from "react-page-scroller";
import "./MySeen.scss";
import Presentation from "./Presentation";
import Technique from "./Technique";

const MySeen = () => {
  return (
    <>
      <ReactPageScroller>
        <Presentation />
        <Technique />
      </ReactPageScroller>
    </>
  );
};

export default MySeen;
