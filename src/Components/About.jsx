import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Profile from "../Assets/Profile.jpg";
import { useTypewriter, Cursor} from "react-simple-typewriter";


let About = () => {
  const [typing] = useTypewriter({
    words : ['Designer', 'Developer', 'Photographer', 'Freelancer'],
    loop : {},
    typeSpeed : 120,
    deleteSpeed : 80,
  });

  return (
    <>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About Me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={ Profile } alt="Shiraz Shaikh" />
            </div>
            <div className="column right">
              <div className="text">
                I'm Shiraz Shaikh and I'm a <span>{typing}</span>
                <span><Cursor/></span>
              </div>
              <p>
              Strong in design and integration with intuitive problem-solving skills. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
              </p>
              <Link to="/">Download CV</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
