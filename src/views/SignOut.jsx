import "../styles/elements/_sign-in.scss";

import {useNavigate} from "react-router-dom";
import supabase from "../services/supabase";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {toaster, Tooltip} from "evergreen-ui";

export default function SignOut() {
  const navigate = useNavigate();

  const logoutUser = async () => {
    let {error} = await supabase.auth.signOut();
    if (!error) {
      toaster.notify("Zostałeś wylogowany.");
      navigate("/");
    }
    return;
  };

  return (
    <>
      <div className="sign-in">
        <h1>Chcesz się wylogować?</h1>

        <div
          className="sign-in-form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tooltip content="Wyloguj">
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
          </Tooltip>
        </div>
        <ButtonBackToTrail />
      </div>
    </>
  );
}
