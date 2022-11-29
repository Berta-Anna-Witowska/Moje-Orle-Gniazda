import "../styles/elements/_sign-in.scss";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
// toaster.notify("oops...");
// toaster.warning("no!");
// toaster.danger("Look out!");
// toaster.success("Great!");
export default function SignIn() {
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const [email, password] = e.target.elements;

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

  const logoutUser = async () => {
    let {error} = await supabase.auth.signOut();
    if (!error) {
      console.log("wylogowany");
      toaster.notify("Zostałeś wylogowany.");
      navigate("/");
    }
    return;
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
    };
    isUserLogged();
  }, []);
  return (
    <>
      {/* {isLogged === true && (
        <div className="sign-in">
          <h1>Logowanie</h1>
          <div
            className="sign-in-form"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              label="Signout"
              className="circle"
              style={{
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px",
                marginBottom: "5px",
              }}
              onClick={logoutUser}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
            <span style={{textTransform: "uppercase"}}> Wyloguj</span>
          </div>
        </div>
      )} */}

      <div className="sign-in">
        <h1>Logowanie</h1>

        <div
          className="sign-in-form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogged && (
            <>
              <button
                label="Logout"
                className="circle"
                style={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px",
                  marginBottom: "5px",
                }}
                onClick={(e) => logoutUser(e)}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
              <span style={{textTransform: "uppercase"}}> Wyloguj</span>
              <ButtonBackToTrail />
            </>
          )}

          {!isLogged && (
            <>
              <div>
                <form
                  onSubmit={(e) => loginUser(e)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <input type="email" placeholder="Adres email" />
                  <input type="password" placeholder="Hasło" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <button
                      label="Signin"
                      className="circle"
                      style={{
                        width: 50,
                        height: 50,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </button>
                    <span style={{textTransform: "uppercase"}}> Zaloguj</span>
                  </div>
                </form>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2>Nie masz jeszcze konta? Zarejestruj się:</h2>
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
