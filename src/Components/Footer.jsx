import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


let Footer = ()=>{
    return(
        <>
        <footer>
        <span>Created By <Link to="/">Shiraz Shaikh</Link> | <span className="far fa-copyright"></span> 2023 All Rights Reserved.</span>
    </footer>
        </>
    )
}

export default Footer;