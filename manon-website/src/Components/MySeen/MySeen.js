import React from "react";
import ReactPageScroller from "react-page-scroller";
import "./MySeen.scss";
import Presentation from "./Presentation";
import Technique from "./Technique";
import myseenvideo01 from "../../assets/myseenvideo01.mp4";

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
