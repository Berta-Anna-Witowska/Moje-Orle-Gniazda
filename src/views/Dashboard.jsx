import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
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
      console.log(session);
      if (error) {
        console.log(error);
      }
      // const {
      //   data: {user},
      // } = await supabase.auth.getUser();
      // if (!user) {
      //   setIsLogged(false);
      //   return;
      // }
      if (!session) {
        setIsLogged(false);
        return;
      }
      setIsLogged(true);
    };
    isUserLogged();
  }, []);

  return (
    <>
      {isLogged === true && (
        <div>
          <Nav isUserLogged={isLogged} />
          <div className="wrapper">
            <SideBar />
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
      {isLogged !== true && (
        <div>
          <Nav isUserLogged={isLogged} />
          <div className="wrapper">
            <SideBar />
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
