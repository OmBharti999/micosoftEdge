import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import GetStarted from "./pages/getStarted/GetStarted";

// components
// import Routes from "./Routes";

export default function R() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/getStarted" element={<GetStarted />} />
    </Routes>
  );
}
