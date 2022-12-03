import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Dashboard from "./views/Dashboard";
import LandingPage from "./views/LandingPage";
import TrailBaseView from "./componnents/TrailBaseView";
import RegionInfo from "./componnents/Region_Info";
import TrailInfo from "./componnents/Trail_info";
import PlacesList from "./componnents/PlacesList";
import Places from "./componnents/Places";
import Gallery from "./componnents/Gallery";
import MyTrips from "./views/MyTrips";
import ToVisit from "./componnents/ToVisit";
import Contact from "./componnents/Contact";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import SignOut from "./views/SignOut";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/" element={<Dashboard />}>
          <Route path="/trailbaseview" element={<TrailBaseView />} />
          <Route path="/trailregioninfo" element={<RegionInfo />} />
          <Route path="/trailInfo" element={<TrailInfo />} />
          <Route path="/traillistofplaces" element={<PlacesList />} />
          {/* <Route path="/trailplacesdescriptions" element={<Places />}></Route> */}
          <Route path="/trailplacesdescriptions/:id" element={<Places />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tovisit" element={<ToVisit />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/mytrips" element={<MyTrips />} />
      </Routes>
    </Router>
  );
}
// / landing page
// / dashboard-Main view
//       -trail -base view
//       -trail -region info
//       -trail -trail info
//       -trail -list of places
//       -trail -single place
//       -gallery
//       -contact
//       -SignIn
//       -SignUp
//       opcjonalnie: -my trips descriptions // dodać Route
//                    -want to visit - list

export default App;
