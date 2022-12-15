import "../styles/elements/_sign-up.scss";

import {useNavigate} from "react-router-dom";
import supabase from "../services/supabase";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {toaster, Tooltip, Position} from "evergreen-ui";

export default function SignUp() {
  const navigate = useNavigate();

  const signupUser = async (e) => {
    e.preventDefault();

    const [email, password, repassword] = e.target.elements;

    if (password.value.length < 6) {
      toaster.warning("Hasło musi się składać co najmniej z 6 znaków.");
      return;
    }
    if (repassword.value.length < 6) {
      toaster.warning("Hasło musi się składać co najmniej z 6 znaków.");
      return;
    }

    if (password.value !== repassword.value) {
      toaster.warning("Hasła muszą być takie same!");
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
        <form onSubmit={(e) => signupUser(e)}>
          <input type="email" placeholder="Adres email" />
          <input type="password" placeholder="Hasło" />
          <input type="password" placeholder="Powtórz hasło" />
          <Tooltip content="Zarejestruj użytkownika" position={Position.RIGHT}>
            <button label="Signup" className="circle-medium">
              <i className="fa-regular fa-address-card"></i>
            </button>
          </Tooltip>
        </form>
        <h2 onClick={() => navigate("/signin")}>Wróć do logowania</h2>
      </div>
      <ButtonBackToTrail />
    </div>
  );
}
