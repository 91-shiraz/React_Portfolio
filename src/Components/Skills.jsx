import React from "react";
import { Link } from "react-router-dom";

let Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My Skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My Creative Skills & Experience</div>
              <p>
                I am a highly motivated and Front-End Developer with 15 months of experience in the field. My passion for technology and desire to continuously improve my skills make me a valuable asset to my team. I am excited about the opportunity to apply my skills and continue to grow as a Front-End Developer.
              </p>
              <Link to="/">Read more</Link>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>70%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>60%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>React</span>
                  <span>50%</span>
                </div>
                <div className="line php"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Git & Github</span>
                  <span>70%</span>
                </div>
                <div className="line mysql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
