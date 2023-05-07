import React from "react";

function About() {
  return (
    <div className="container py-4">
      <h2 className="h2 text-center" id="About-Me">
        About Me
      </h2>
      <div className="justify-content-center">
        <img
          src="./jesseportrait.jpg"
          className="headshot-img"
          alt=" headshot "
        />
      </div>
      <p>
        I am an avid learner, working into the world of tech. I have always
        enjoyed building and repairing computers, coding seems like a good
        logical step to use as a creative outlet. I also highly enjoy problem
        solving so coding is a fun, yet frustrating way to get more of that into
        my day. For fun I love to cook, read, play instruments, listen to music,
        listen to birds, go for long drives, swim in the ocean or watch the
        skies at night.
      </p>
      <p></p>
    </div>
  );
}

export default About;
