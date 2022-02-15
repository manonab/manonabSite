import React from "react";
import "./About.scss";
import { NavLink } from "react-router-dom";
const Presentation = () => {

    return(
        <div className="groupement">
        <div className="presentation">
        <h1 className="bigTitleJ">
            Le commencement
        </h1>
        <div className="textMe">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looŸking at its layout.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <NavLink to={"/code"}>
        <button className="buttonMe">voir mes projets</button>
        </NavLink>
        </div>
        </div>
    )
}
export default Presentation;