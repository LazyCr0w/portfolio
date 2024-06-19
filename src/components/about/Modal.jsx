import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./About.css";
const Modal = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n4oyfus", "template_3l1az1c", form.current, {
        publicKey: "3woUocynYhd5sDdlN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input type="text" name="from_name" id="from_name" />
          </div>
          <div className="form-group">
            <label htmlFor="from_email">Email</label>
            <input type="email" name="from_email" id="from_email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" />
          </div>
          <div className="submit">
            <input type="submit" value="Send" />
          </div>
          <div className="close">
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
