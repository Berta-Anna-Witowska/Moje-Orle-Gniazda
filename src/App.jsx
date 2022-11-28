import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Dashboard from "./views/Dashboard";
import LandingPage from "./views/LandingPage";
import TrailBaseView from "./componnents/TrailBaseView";
import RegionInfo from "./componnents/Region_Info";
import TrailInfo from "./componnents/Trail_info";
import PlacesList from "./componnents/PlacesList";
import Places from "./componnents/Places";
import Gallery from "./componnents/Gallery";
import Contact from "./componnents/Contact";
import SignIn from "./componnents/SignIn";
import SignUp from "./componnents/SignUp";

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
          <Route path="/trailplacesdescriptions/:id2" element={<Places />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
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
