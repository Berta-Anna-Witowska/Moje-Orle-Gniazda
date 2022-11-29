import React, {useState} from "react";
import "../styles/elements/_contact.scss";
import "../styles/settings/_colors.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("Send");
  const sendMail = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const {name, email, message} = e.target.elements;
    let conFom = {
      // name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
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
            onSubmit={sendMail}
          >
            <input type="email" placeholder="Podaj nam swój adres e-mail" />
            <input type="name" placeholder="Jak masz na imię?" />
            <textarea
              type="text"
              placeholder="Co chciałbyś mi powiedzieć...?"
              rows="4"
            />
            <button
              className="circle"
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
