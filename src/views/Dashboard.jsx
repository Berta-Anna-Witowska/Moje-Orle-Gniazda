import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import supabase from "../services/supabase";

import Nav from "../componnents/Nav";
import SideBar from "../componnents/SideBar";
import Footer from "../componnents/Footer";

export default function Dashboard() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: {session},
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      }
      if (!session) {
        setIsLogged(false);
        return;
      }
      setIsLogged(true);
    };
    isUserLogged();
  }, []);

  return (
    <div>
      <Nav isUserLogged={isLogged} />
      <div className="wrapper">
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
