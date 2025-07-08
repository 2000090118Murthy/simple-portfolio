import React from "react";
import "./Styles/Section.scss";
import img2 from "./Assests/img2.jpg";
const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={img2} alt="" />
        </div>
        <div className="section__content">
          <h1>Hi Iam Satya</h1>
          <p>Experienced in Front-end & back-end Devlopment</p>
          <p>Python Devlopment</p>
          <p>JavaScript Devlopment</p>
          <p>Java</p>
          <p>AWS</p>
        </div>
      </div>
    </div>
  );
};
export default Section;
