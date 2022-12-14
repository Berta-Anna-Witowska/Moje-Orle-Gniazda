import "../styles/elements/_contact.scss";

import React, {useRef} from "react";

import emailjs from "@emailjs/browser";
import {publicKEY, emailJS_serviceKEY, template} from "../services/emailjs";

import rock1Drawing from "../assets/pics/drawings/01_Skala.png?url";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {toaster, Tooltip, Position} from "evergreen-ui";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const [email, name, message] = e.target.elements;

    if (name.value.length < 3) {
      toaster.warning("Imię musi się składać co najmniej z 3 znaków.");
      return;
    }
    if (message.value.length < 5) {
      toaster.warning("Wiadomość musi składać się z co najmniej 5 znaków.");
      return;
    }

    emailjs
      .sendForm(emailJS_serviceKEY, template, form.current, publicKEY)
      .then(
        (result) => {
          toaster.success("Wiadomość wysłana!");
        },
        (error) => {
          toaster.danger("Wysyłanie nie powiodło się !");
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <h1>Kontakt</h1>
      <div className="contact-form">
        <div className="contact-mail">
          <h2>Dane kontaktowe</h2>
          <a style={{color: "rgba(206, 217, 230, 0.9)"}}>
            moje.orle.gniazda@gmail.com
          </a>
        </div>
        <div className="contact-message">
          <h2>Wyślij wiadomość</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="Podaj swój adres e-mail"
              required
            />
            <input
              type="text"
              name="user_name"
              placeholder="Jak masz na imię?"
              required
            />
            <textarea
              type="text"
              name="message"
              placeholder="Co chciałbyś mi powiedzieć...?"
              rows="4"
              autoComplete="off"
              required
            />
            <Tooltip content="Wyślij" position={Position.RIGHT}>
              <button
                className="circle-medium"
                name="send"
                type="submit"
                value="Submit"
              >
                <i className="fa-solid fa-envelope-open-text"></i>
              </button>
            </Tooltip>
          </form>
        </div>
      </div>
      <ButtonBackToTrail />
      <img
        className="drawing-rock"
        src={rock1Drawing}
        alt="Rysunek skały Okiennik Wielki"
      ></img>
    </div>
  );
}
