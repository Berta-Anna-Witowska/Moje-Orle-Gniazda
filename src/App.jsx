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
import MyTripsInfoPage from "./componnents/MyTripsInfoPage";
import MyTripsAddNew from "./componnents/MyTripsAddNew";
import MyTripsShowTrip from "./componnents/MayTripsShowTrip";

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
          <Route path="/trailplacesdescriptions/:id" element={<Places />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tovisit" element={<ToVisit />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/mytrips" element={<MyTrips />}>
          <Route path="/mytrips/info" element={<MyTripsInfoPage />}></Route>
          <Route path="/mytrips/addnew" element={<MyTripsAddNew />}></Route>
          <Route path="/mytrips/post/:id" element={<MyTripsShowTrip />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
// / landing page
// / dashboard-
//       -trail -base view
//       -trail -region info
//       -trail -trail info
//       -trail -list of places
//       -trail -single place
//       -gallery
//       -contact

//       opcjonalnie: -my trips descriptions // dodać Route
//                    -want to visit - list
//  / SignIn
//  / SignOut
//  / SignUp
//  / MyTrips   - mainview
//              - add new
//              -  show trip
export default App;
