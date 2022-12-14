import "../styles/elements/_sign-in.scss";

import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../services/supabase";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {toaster, Tooltip, Position} from "evergreen-ui";

export default function SignIn() {
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const [email, password] = e.target.elements;

    if (password.value.length < 6) {
      toaster.warning("Hasło musi się składać co najmniej z 6 znaków.");
      return;
    }

    let {
      data: {user},
      error,
    } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      toaster.warning("Pojawił się problem. Spróbuj jeszcze raz!");
      return;
    }
    toaster.success("Logowanie powiodło się!");
    navigate("/trailbaseview");
  };

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      if (!user) {
        setIsLogged(false);
        return;
      }
      setIsLogged(true);
      navigate("/signout");
    };
    isUserLogged();
  }, []);
  return (
    <>
      <div className="sign-in">
        <h1>Logowanie</h1>

        <div className="sign-in-form">
          {!isLogged && (
            <>
              <div>
                <form onSubmit={(e) => loginUser(e)}>
                  <input type="email" placeholder="Adres email" />
                  <input type="password" placeholder="Hasło" />
                  <div>
                    <Tooltip content="Zaloguj" position={Position.RIGHT}>
                      <button label="Signin" className="circle-medium">
                        <i className="fa-solid fa-right-to-bracket"></i>
                      </button>
                    </Tooltip>
                  </div>
                </form>
              </div>
              <div>
                <h2>Nie masz jeszcze konta? Zarejestruj się:</h2>
                <button
                  className="circle-medium"
                  onClick={() => navigate("/signup")}
                  label="Create account"
                >
                  <i className="fa-regular fa-address-card"></i>
                </button>
              </div>
            </>
          )}
        </div>
        <ButtonBackToTrail />
      </div>
    </>
  );
}
