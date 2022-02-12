import React from "react";
import { RiArrowDropRightFill } from "react-icons/ri";

const Create = ({ switchLanguage }) => {
  return (
    <>
          <div className="testHome">
            <h1 className="bigTitle">Créer</h1>
            <div className="arrow">
              <div className="line"></div>
              <RiArrowDropRightFill size={100} color={"#973465"} className="headArrow"/>
            </div>
            <span>
              <p>
                texte pour mieux me présenter et mieux cerner ma personnalité + ce que
                je recherche dans le développement web
              </p>
            </span>
          </div>
            <div className="diagoLine"></div>
        </>
  );
};

export default Create;
