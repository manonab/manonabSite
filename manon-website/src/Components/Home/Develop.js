import React, { useState } from "react";
import axios from "axios";
import { RiArrowDropRightFill } from "react-icons/ri";
import { FaGithub, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Develop = ({ switchLanguage }) => {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");

  const [modal, setModal] = useState(false);

  const sendForm = async () => {
    console.log(name, company, content, email)
    let post = await axios
      .post("https://manonwebsite.herokuapp.com/post_name", {
        name: name,
        company: company,
        content: content,
        email: email,
      })
      .then(() => console.log('message sent'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="goupe">
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
          <p className="textDEv">
            Et si maintenant on s'appelait ? Si mon univers t'as parlé,
            n'hésites pas à me contacter par mail (abelcoindozm@gmail.com) ou à
            me laisser un message sur LinkedIn.
          </p>
          <p className="textDEv">
            Tu peux découvrir mon compte GitHub pour toujours plus de code.
          </p>
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
            <a
              className="icon"
              href="https://github.com/manonab"
              target={"_blank"}
            >
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
      <form className="formulaire" onSubmit={(e) => sendForm(e)}>
        <h4>Votre nom</h4>
        <input
          value={name}
          required
          placeholder="nom"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <h4>Votre entreprise</h4>
        <input
          value={company}
          required
          placeholder="entreprise"
          onChange={(e) => setCompany(e.target.value)}
        ></input>
        <h4>Votre message</h4>
        <textarea
          required
          placeholder="message"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <h4>Où puis-je vous contacter ?</h4>
        <input
          value={email}
          required
          placeholder="adresse email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button className="button" type="submit">ENVOYER</button>
      </form>
    </div>
  );
};

export default Develop;
