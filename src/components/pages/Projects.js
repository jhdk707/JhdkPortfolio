import React from "react";

function Portfolio() {
  return (
    <div className="project-container">
      <h2 class="h2 text-center" id="Portfolio">
        Projects
      </h2>
      <div className="projectsscrollcontainer">
        <div className="row">
          <div className="card col-11">
            <h5 className="card-title text-center">
              National Parks Reviewer 5000
            </h5>
            <img
              className="card-img-top"
              src="./NTLPRKSSCREENCAP.png"
              alt="screenshot of webpage"
            />
            <div className="card-body">
              <p className="card-text">
                A group project which included full-stack dev, client side,
                middleware and back end. It was a lot of fun although we were
                met with some pretty big battles.
              </p>
              <div class="btn-group mx-auto justify-content-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lit-eyrie-51719.herokuapp.com/"
                  class="btn btn-light"
                >
                  Deployed Project
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jhdk707/NationalParksReviewer5000"
                  class="btn btn-dark"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card col-11">
            <h5 className="card-title text-center">Note Taker App</h5>
            <img
              className="card-img-top"
              src="./NoteTaker5000sc.png"
              alt="screenshot of webpage"
            />
            <div className="card-body">
              <p className="card-text">
                The NoteTaker5000 App is an application that you can use create,
                save and erase notes. It is lightweight and quick to use!
              </p>
              <div class="btn-group mx-auto justify-content-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://notetaker5000.herokuapp.com/"
                  class="btn btn-light"
                >
                  Deployed Project
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jhdk707/NoteTaker5000"
                  class="btn btn-dark"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>

          <div className="card col-11">
            <h5 className="card-title text-center">
              NeedleJunkeez MERN application
            </h5>
            <img className="card-img-top" src=" " alt="screenshot of webpage" />
            <div className="card-body">
              <p className="card-text">
                A Vinyl Collector social media website
              </p>
              <div class="btn-group mx-auto justify-content-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://needlejunkies.herokuapp.com/"
                  class="btn btn-light"
                >
                  Deployed Project
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jhdk707/NoteTaker5000"
                  class="btn btn-dark"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>

          <div className="card col-11">
            <h5 className="card-title text-center">Workday Scheduler</h5>
            <img
              className="card-img-top"
              src="./workdayscheduler.png"
              alt="screenshot of webpage"
            />
            <div className="card-body">
              <p className="card-text">
                This simple workday scheduler uses a color system to let you
                know if you're on-time to stay on path or coming up to needing
                to move or abandon the next item on your list.
              </p>
              <div class="btn-group mx-auto justify-content-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jhdk707.github.io/WorkDayScheduler/"
                  class="btn btn-light"
                >
                  Deployed Project
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jhdk707/WorkDayScheduler"
                  class="btn btn-dark"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card col-11">
            <h5 className="card-title text-center">Weather Dashboard</h5>
            <img
              className="card-img-top"
              src="./weatherapp.png"
              alt="screenshot of webpage"
            />
            <div className="card-body">
              <p className="card-text">
                This weather dashboard app allows you to search by city name and
                check the weather there before you travel or venture outside!
              </p>
              <div class="btn-group mx-auto justify-content-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jhdk707.github.io/WeatherApp/"
                  class="btn btn-light"
                >
                  Deployed Project
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jhdk707/WeatherApp"
                  class="btn btn-dark"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="card col-11">
            <h5 className="card-title text-center">Password Generator</h5>
            <img
              className="card-img-top"
              src="./passwrdgensc.png"
              alt="screenshot of webpage"
            />
            <div className="card-body ">
              <p className="card-text">
                Built a password generator that gives you several options and a
                character choice from 8-128 characters to make as secure of a
                password as you want.
              </p>
              <div class="btn-group">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jhdk707.github.io/Password-Generator-Assignment/"
                  class="btn btn-light"
                >
                  Deployed Project
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jhdk707/Password-Generator-Assignment"
                  class="btn btn-dark"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
