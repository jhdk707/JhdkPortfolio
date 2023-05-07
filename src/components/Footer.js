import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="container fixed-bottom">
      <div className="contact-btns">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jessehudak707@outlook.com"
          className="btn btn-light col-3"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jhdk707"
          className="btn btn-light col-3"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jesse-hudak-085117272/"
          className="btn btn-light col-3"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      Copyright 2023 @ Jesse Hudak, Made with React and VSCode
    </footer>
  );
}

export default Footer;
