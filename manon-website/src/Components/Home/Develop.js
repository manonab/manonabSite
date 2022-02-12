import React from "react";
import { RiArrowDropRightFill } from "react-icons/ri";
import { FaGithub,FaLinkedinIn,FaGooglePlusG } from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";
import {NavLink} from 'react-router-dom';
import { MdEmail } from "react-icons/md";

function Develop() {
  return (
    <>
      <div className="testHome">
        <h1 className="bigTitle">Développer</h1>
        <div className="arrow">
          <div className="line"></div>
          <RiArrowDropRightFill
            size={100}
            color={"#973465"}
            className="headArrow"
          />
        </div>
        <div className="textEnd">
          <p>
            Et si maintenant on s'appelait ? Si mon univers t'as parlé,
            n'hésites pas à me contacter par mail (abelcoindozm@gmail.com) ou à
            me laisser un message sur LinkedIn.
          </p>
          <p>Tu peux découvrir mon compte GitHub pour toujours plus de code.</p>
        </div>
        <ul className="iconGroup">
          <li>
            <a
              className="icon"
              href="https://www.linkedin.com/in/manon-abel-coindoz-b6449211a/"
              target={"_blank"}
            >
              <FaLinkedinIn size={43} color={"#973465"} />
            </a>
          </li>
          <li>
            <a className="icon" href="https://github.com/manonab"target={"_blank"}>
              <FaGithub size={43} color={"#973465"} />
            </a>
          </li>
          <li>
            <NavLink to={"contact"}>
              <AiOutlineForm size={43} color={"#973465"} />
            </NavLink>
          </li>
          <li>
            <a
              className="icon"
              href="https://github.com/manonab"
              target={"_blank"}
            >
              <MdEmail size={43} color={"#973465"} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Develop;