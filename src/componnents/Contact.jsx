import "../styles/elements/_contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Kontakt</h1>
      <div className="contact-form">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h2>e-mail</h2>
          {/* <i class="fa-regular fa-message"></i> */}
          <a>moje.orle.gniazda@gmail.com</a>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <h2>Wiadomość</h2>
          {/* <i class="fa-regular fa-message"></i> */}
          tu input/ texarea itd
        </div>

        <button
          className="circle"
          style={{
            width: 50,
            height: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i class="fa-solid fa-envelope-open-text"></i>
          {/* <i
            class="fa-regular fa-share-from-square"
            style={{marginLeft: "5px"}}
          ></i> */}
        </button>
        <span style={{margin: "5px"}}>Wyślij</span>
      </div>
    </div>
  );
}
