import React, {useState, useRef} from "react";
import "../styles/elements/_contact.scss";
import "../styles/settings/_colors.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import emailjs from "@emailjs/browser";
import {publicKEY} from "../services/emailjs";
import {emailJS_serviceKEY} from "../services/emailjs";
import {template} from "../services/emailjs";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailJS_serviceKEY, template, form.current, publicKEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <h1>Kontakt</h1>
      <div
        className="contact-form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="contact-mail"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Dane kontaktowe</h2>
          {/* <i class="fa-regular fa-message"></i> */}
          <a style={{color: "rgba(206, 217, 230, 0.9)"}}>
            moje.orle.gniazda@gmail.com
          </a>
        </div>
        <div
          className="contact-message"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Wyślij wiadomość</h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="email"
              name="user_email"
              placeholder="Podaj nam swój adres e-mail"
            />
            <input
              type="name"
              name="user_name"
              placeholder="Jak masz na imię?"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Co chciałbyś mi powiedzieć...?"
              rows="4"
            />
            <button
              className="circle"
              type="submit"
              value="Send"
              style={{
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5px",
              }}
            >
              <i className="fa-solid fa-envelope-open-text"></i>
            </button>
            <span style={{textTransform: "uppercase"}}>Wyślij</span>
          </form>
        </div>
      </div>
      <ButtonBackToTrail />
    </div>
  );
}
