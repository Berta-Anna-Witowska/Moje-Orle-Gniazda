import "../styles/elements/_contact.scss";
import "../styles/settings/_colors.scss";

export default function Contact() {
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
          >
            <textarea placeholder="Co chciałbyś mi powiedzieć...?" rows="8" />
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
    </div>
  );
}
