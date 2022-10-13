import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Sidebar from "./pages/sidebar/Sidebar";
import GetStarted from "./pages/getStarted/GetStarted";
import Activity from "./pages/shoppingActivity/Activity";
import Shopping from "./pages/shopping/Shopping";
// import Feeds from "./pages/feed/Feed";

// components
// import Routes from "./Routes";

export default function R() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/getStarted" element={<GetStarted />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/shopping" element={<Shopping />} />
      {/* <Route path="/feeds" element={<Feeds />} /> */}
    </Routes>
  );
}
