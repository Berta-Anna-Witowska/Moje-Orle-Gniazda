import "../styles/elements/_sign-in.scss";
import {useNavigate} from "react-router-dom";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";
// const notification = toaster.notify("oops...");
// const error = toaster.warning("no!");
// const danger = toaster.danger("Look out!");
// const success = toaster.success("Great!");
export default function SignIn(isLogged) {
  const navigate = useNavigate();

  const signinUser = async (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;
    let {
      data: {user, error},
    } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      toaster.warning("Pojawił się problem. Spróbuj jeszcze raz!");
      return;
    }
    // localStorage.setItem("userData", JSON.stringify(user));

    toaster.success("Logowanie powiodło się!");
    navigate("/trailbaseview");
  };

  const logoutUser = async () => {
    let {error} = await supabase.auth.signOut();
    if (!error) {
      console.log("wylogowany");
      navigate("/signin");
    }
  };

  return (
    <>
      {isLogged === true && (
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
      )}
      {isLogged !== true && (
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
            <div>
              <form
                onSubmit={(e) => signinUser(e)}
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
          </div>
        </div>
      )}
    </>
  );
}
