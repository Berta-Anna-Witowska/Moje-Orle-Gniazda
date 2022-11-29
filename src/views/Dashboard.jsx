import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "../services/supabase";

import {toaster} from "evergreen-ui";

import Nav from "../componnents/Nav";
import SideBar from "../componnents/SideBar";
import Footer from "../componnents/Footer";

export default function Dashboard() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      if (!user) {
        toaster.notify(
          "Jesteś niezalogowany. Jeśli chcesz zobaczyć więcej przejdź do logowania."
        );
        setIsLogged(false);
        return;
      }
      setIsLogged(true);
    };
    isUserLogged();
  }, []);
  console.log(isLogged);

  return (
    <div>
      <Nav isUserLogged={isLogged} />
      <div className="wrapper">
        <SideBar />
        <Outlet isUserLogged={isLogged} />
      </div>
      <Footer />
    </div>
  );
}
