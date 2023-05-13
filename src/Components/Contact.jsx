import React from "react";
import "../App.css";
import { FaUser } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Formik,Form, Field,ErrorMessage } from "formik"
import * as Yup from 'yup';

let Contact = ()=>{
  return(
    <>
        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div className="icons">
                        <div className="row">
                            <FaUser className="users"/>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Shiraz Shaikh</div>
                            </div>
                        </div>
                        <div className="row">
                            <ImLocation2 className="users"/>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Hirabad, Hyderabad, Pakistan</div>
                            </div>
                        </div>
                        <div className="row">
                        <MdEmail className="users"/>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">sheerazshaikh965@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message Me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact;