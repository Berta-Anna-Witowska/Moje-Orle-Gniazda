import React, {useRef} from "react";
import "../styles/elements/_contact.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import emailjs from "@emailjs/browser";
import {publicKEY} from "../services/emailjs";
import {emailJS_serviceKEY} from "../services/emailjs";
import {template} from "../services/emailjs";
import {toaster, Tooltip, Position} from "evergreen-ui";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
              placeholder="Podaj swój adres e-mail"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Jak masz na imię?"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Co chciałbyś mi powiedzieć...?"
              rows="4"
            />
            <Tooltip content="Wyślij" position={Position.RIGHT}>
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
            </Tooltip>
          </form>
        </div>
      </div>
      <ButtonBackToTrail />
    </div>
  );
}
