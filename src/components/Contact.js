import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import './Styles/Contact.scss'
const Contact = () => {
  return (
    <div className="contact">
      <Link to="/ ">
        <ArrowBack className="arrow" />
      </Link>

      <div className="inputs">
        <h1>Contact Me</h1>

        <input type="text" placeholder="Name" />

        <input type="text" placeholder="Email" />

        <input type="text" placeholder="Message" className="message" />

        <button>Send</button>
      </div>
    </div>
  );
};
export default Contact;
