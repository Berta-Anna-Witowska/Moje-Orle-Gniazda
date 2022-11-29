import "../styles/elements/_sign-up.scss";
import supabase from "../services/supabase";
import {useNavigate} from "react-router-dom";
import {toaster} from "evergreen-ui";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function SignUp() {
  const navigate = useNavigate();

  const signupUser = async (e) => {
    e.preventDefault();

    const [email, password, repassword] = e.target.elements;

    if (password.value !== repassword.value) {
      toaster.notify("Hasła muszą być takie same!");
      return;
    }

    let {
      data: {user},
      error,
    } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) {
      toaster.warning("Pojawił się problem. Spróbuj jeszcze raz!");
      return;
    }
    toaster.success("Rejestracja powiodła się! Jesteś teraz zalogowany.");
    navigate("/trailbaseview");
    return;
  };
  return (
    <div className="sign-up">
      <h1>Rejestracja</h1>
      <div className="sign-up-form">
        <form
          onSubmit={(e) => signupUser(e)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input type="email" placeholder="Adres email" />
          <input type="password" placeholder="Hasło" />
          <input type="password" placeholder="Powtórz hasło" />
          <button
            label="Signup"
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
            <i className="fa-regular fa-address-card"></i>
          </button>
          <span style={{textTransform: "uppercase"}}>Zarejestruj</span>
        </form>
      </div>
      <ButtonBackToTrail />
    </div>
  );
}
