import React from "react";
import "./Contact.css";
import { gmail, instagram, facebook, linkedin, twitter } from "./import";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <h1>Contact</h1>
      </div>
      <div className="contact-logo">
        <div>
          <a href="debz777frosty@gmail.com">
            <img src={gmail} alt="gmail" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/_sirius_._regulus_?igsh=czZ1Z3FscGRubHN3">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/share/4SBntePDXiVQ67SA/?mibextid=qi2Omg">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/sumon-deb-742346314/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div>
          <a href="https://x.com/sdfrosty777?t=ux2x2gBFxLFCBhZmHGzmqQ&s=08">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
