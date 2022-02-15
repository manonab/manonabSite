import React from "react";
import Presentation from "./Presentation";
import Technique from "./Technique";
import ReactPageScroller from "react-page-scroller";

const Lanvest = () => {
  return (
    <ReactPageScroller>
      <Presentation />
      <Technique />
    </ReactPageScroller>
  );
};

export default Lanvest;
