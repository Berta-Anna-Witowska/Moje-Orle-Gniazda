import "../styles/elements/_sign-up.scss";

export default function SignUp() {
  return (
    <div className="sign-up">
      <h1>Rejestracja</h1>
      <div className="sign-up-form">
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
          <i class="fa-regular fa-address-card"></i>
        </button>
        <span style={{margin: "5px"}}>Zarejestruj</span>
      </div>
    </div>
  );
}
