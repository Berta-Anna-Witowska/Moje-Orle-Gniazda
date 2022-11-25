import {Outlet} from "react-router-dom";

import Nav from "../componnents/Nav";
import SideBar from "../componnents/SideBar";
import Footer from "../componnents/Footer";

export default function Dashboard() {
  return (
    <div>
      <Nav />
      <div className="wrapper">
        <SideBar />
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
