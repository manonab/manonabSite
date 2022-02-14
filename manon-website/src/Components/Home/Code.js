import React from "react";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const Code = ({ switchLanguage }) => {
  return (
    <>
      <div className="testHome">
        <h1 className="bigTitleRight">Coder</h1>
        <div className="arrowCode">
          <RiArrowDropLeftFill
            size={100}
            color={"#973465"}
            className="headArrowCode"
          />
          <div className="line"></div>
        </div>
        <ul className="listProject">
          <li>
            <NavLink to={"/projects/lanvest"}>
              <button className="button">Lanvest</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects/myseen"}>
              <button className="button">My S.E.E.N</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects/geneaka"}>
              <button className="button">Geneaka</button>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="diagoLineCode"></div>
    </>
  );
};

export default Code;
