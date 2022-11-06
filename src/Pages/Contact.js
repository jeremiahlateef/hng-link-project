import React from "react";
import Footer from "../Footer";
import { useState } from "react";
import "../App.css";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  // console.log(message);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleChange1 = (event) => {
    setMessage1(event.target.value);
  };
  const handleChange2 = (event) => {
    setMessage2(event.target.value);
  };
  // console.log(message);
  return (
    <section className="App">
      <div className="section-center">
        <h2 className="contact-title">contact me</h2>
        <p className="contact-info">
          Hi there, contact me to ask about anything you have in mind.
        </p>
        <form action="" className="form-cont">
          <div className="name-cont">
            <div className="input-div">
              <label htmlFor="first_name" className="values">
                First name
              </label>
              <input
                className="inputs"
                type="text"
                id="first_name"
                onChange={handleChange}
                value={message}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="input-div">
              <label htmlFor="last_name" className="values">
                Last name
              </label>
              <input
                className="inputs"
                type="text"
                id="last_name"
                onChange={handleChange1}
                value={message1}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <label htmlFor="email" className="values">
            Email
          </label>
          <input
            className="inputs"
            type="email"
            id="email"
            onChange={handleChange1}
            value={message1}
            placeholder="yourname@email.com"
            required
          />
          <label htmlFor="message" className="values">
            Message
          </label>
          <br />

          <textarea
            name="text"
            id="message"
            cols="30"
            rows="10"
            className="inputs"
            required
          ></textarea>

          <input
            className="checks"
            type="checkbox"
            id="check"
            onChange={handleChange2}
            value={message2}
          />
          <label htmlFor="check" className="values">
            You agree to providing your data to Jeremiah (Lateef) who may
            contact you.
          </label>
          <input
            type="submit"
            className="btn-submit"
            id="btn__submit"
            value="Send message"
          />
        </form>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
