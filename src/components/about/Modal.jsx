import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./About.css";

const Modal = ({ onClose }) => {
  const [isSending, setIsSending] = useState(false); // Track sending state
  const [sendStatus, setSendStatus] = useState(null); // Success/error message
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to show a loading indicator
    setSendStatus(null); // Clear previous messages

    try {
      const response = await emailjs.sendForm(
        "service_n4oyfus",
        "template_3l1az1c",
        form.current,
        {
          publicKey: "3woUocynYhd5sDdlN",
        }
      );

      if (response.status === 200) {
        setSendStatus("Success! Your email has been sent.");
        console.log("SUCCESS!", response.status, response.text);
      } else {
        setSendStatus("Error sending email. Please try again later.");
        console.log("FAILED...", response.status, response.text);
      }
    } catch (error) {
      setSendStatus("Error sending email. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsSending(false); // Clear sending state after completion
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="from_email"
              id="from_email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            />
          </div>
          <div className="submit-and-close">
            <input type="submit" value="Send" className="button" />
            <button className="button" onClick={onClose}>
              Close
            </button>
            {isSending && <p className="sending">Sending...</p>}{" "}
            {/* Loading indicator */}
            {sendStatus && (
              <p
                className={sendStatus.includes("Success") ? "success" : "error"}
              >
                {sendStatus}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
