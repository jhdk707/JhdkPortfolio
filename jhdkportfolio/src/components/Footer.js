import React from "react";

function Footer() {
  return (
    <footer className="container">
      <div className="contact-btns">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jessehudak707@outlook.com"
          className="btn btn-light col"
        >
          Email Me
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jhdk707"
          className="btn btn-light col"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jesse-hudak-085117272/"
          className="btn btn-light col"
        >
          LinkedIn
        </a>
      </div>
      Made by Jesse with <span className="heart"> ❤</span> and React
    </footer>
  );
}

export default Footer;
