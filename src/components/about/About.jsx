import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../../images/profile-pic.png";
import Modal from "./Modal";
import "./About.css";
import {
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [text] = useTypewriter({
    words: [
      "I'm an enthusiastic web developer with a passion for creating user-friendly and visually appealing websites. I'm currently honing my skills in HTML, CSS and Javascript. I have been exploring the React.js library and pursuing MERN Stack to learn as much as possible about FullStack Web Dev. My strong foundation in computer science comes from my Bachelor's degree in the field, and I'm currently expanding my knowledge by pursuing a Master's degree in Computer Science at Assam University.",
    ],
    typeSpeed: 20,
    deleteSpeed: 0,
  });

  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h1 className="gradient-text">
          Hi<span className="about-comma">,</span>
          <br /> My Name is <span className="sumon-color">Sumon</span>
          <br />
          <span className="last-head">And I am into Web Development</span>
        </h1>
        <div className="typed-text-container">
          <p className="typed-text">
            {text}
            <Cursor />
          </p>
        </div>
        <div className="about-button">
          <button className="about-button-style" onClick={toggleModal}>
            Contact
          </button>
          <div className="social-container">
            <div className="social">
              <div>
                <a href="debz777frosty@gmail.com">
                  <BiLogoGmail />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/_sirius_._regulus_?igsh=czZ1Z3FscGRubHN3">
                  <BiLogoInstagram />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/share/4SBntePDXiVQ67SA/?mibextid=qi2Omg">
                  <BiLogoFacebookSquare />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/sumon-deb-742346314/">
                  <BiLogoLinkedin />
                </a>
              </div>
              <div>
                <a href="https://x.com/sdfrosty777?t=ux2x2gBFxLFCBhZmHGzmqQ&s=08">
                  <BsTwitterX />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-img">
        <img src={profile} alt="profile" />
      </div>
      {showModal && (
        <Modal
          className="modal-open"
          onClose={() => setShowModal(false)}
        ></Modal>
      )}
    </div>
  );
};

export default About;
