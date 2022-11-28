import "../styles/elements/_sign-up.scss";
import supabase from "../services/supabase";
import {useNavigate} from "react-router-dom";
import {toaster} from "evergreen-ui";

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
      data: {user, error},
    } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    console.log(user);
    toaster.success("Logowanie powiodło się!");
    if (error) {
      toaster.warning("Pojawił się problem. Spróbuj jeszcze raz!");
      return;
    }
    toaster.success("Logowanie powiodło się!");

    navigate("/trailbaseview");
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
          <input placeholder="Adres email" />
          <input placeholder="Hasło" />
          <input placeholder="Powtórz hasło" />
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
    </div>
  );
}
