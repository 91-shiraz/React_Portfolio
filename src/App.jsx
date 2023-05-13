import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

let App = ()=>{
  return(
    <>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>

    <Footer/> 
    </>

  )
}

export default App;