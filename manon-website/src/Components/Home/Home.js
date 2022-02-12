import React from "react";
import "./Home.scss";
import ReactPageScroller from 'react-page-scroller';
import Create from "./Create";
import Code from "./Code";
import Develop from "./Develop";

const Home = ({ switchLanguage }) => {
  
  return (
    <>
    <ReactPageScroller>
      <Create />
      <Code />
      <Develop />
    </ReactPageScroller>
    </>
  );
};

export default Home;
