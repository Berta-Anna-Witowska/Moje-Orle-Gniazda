import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";

import Nav from "../componnents/Nav";
import SideBar from "../componnents/SideBar";
import Footer from "../componnents/Footer";

export default function Dashboard() {
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      console.log(user);
      if (!user) {
        toaster.notify("Może chcesz się zalogować?");
        setIsLogged(false);
        return;
      }
      setIsLogged(true);
    };
    isUserLogged();
  }, []);
  return (
    <div>
      <Nav isLogged />
      <div className="wrapper">
        <SideBar />
        <Outlet isLogged />
      </div>
      <Footer />
    </div>
  );
}
