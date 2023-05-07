import React from "react";

function Resume() {
  return (
    <div className="container">
      <h2 className="h2 text-center" id="Resume">
        My Resume and Learned Technologies
      </h2>

      <h3>Areas of Knowledge</h3>
      <ul>
        <li>HTML</li>
        <li>CSS & Frameworks (Bulma, Bootstrap) </li>
        <li>API & MySql, Insomnia</li>
        <li>MERN (MongoDB, Express, React, Node)</li>
        <li>JavaScript & React JS</li>
      </ul>
      <button
        className="btn btn-light btn-outline-dark"
        onClick={() => window.open("./Resume.pdf", "_blank")}
      >
        Download Resume
      </button>
    </div>
  );
}

export default Resume;
