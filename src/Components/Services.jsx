import React from "react";
import "../App.css";
import { FaPaintBrush, FaFigma } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";

let Services = ()=>{
  return(
    <>
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My Services</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <FaPaintBrush className="skills-icons"/>
                        <div className="text">Graphics Designing</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <FaFigma className="skills-icons"/>
                        <div className="text">UI/UX Designing</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <HiCodeBracket className="skills-icons"/>
                        <div className="text">Web Designing</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
               </div>
            </div>
    </section>
    </>
  )
}

export default Services;