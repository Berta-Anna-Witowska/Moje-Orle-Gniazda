import "../styles/elements/_sign-in.scss";

export default function SignIn() {
  return (
    <div className="sign-in">
      <h1>Logowanie</h1>
      <div className="sign-in-form">
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
          <i class="fa-solid fa-right-to-bracket"></i>
        </button>
        <span style={{margin: "5px"}}>Zaloguj</span>
      </div>
    </div>
  );
}
