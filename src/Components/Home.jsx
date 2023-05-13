import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useTypewriter , Cursor } from "react-simple-typewriter";


let Home = ()=>{
  const [typing]  = useTypewriter({
    words : ['Designer', 'Developer', 'Photographer', 'Freelancer'],
    loop : {},
    typeSpeed : 120,
    deleteSpeed : 80,
  });

  return(
    <>
    
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, I'm</div>
                <div className="text-2">Shiraz Shaikh</div>
                <div className="text-3">And I'm a <span>{typing}</span> 
                <span><Cursor/></span>
                </div>
                <Link to="/Contact">Hire Me</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home;