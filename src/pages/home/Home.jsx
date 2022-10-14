// import "./home.css";
// export default function Home() {
//   return <>Microsoft Edge has been updated</>}
import { Link } from "react-router-dom";

import CT from "../../components/coloredText/ColoredText";
import But from "../../components/button/But";
import "./home.css";
export default function Home() {
  return (
    <div className="home-container">    <div className="home-page">
      <h1>
        {/* <span className="spacialcolor"></span> */}
        <CT text="Microsoft Edge" /> has been updated
      </h1>
      <div>Choose the web browser that puts you first</div>
      <Link to="/feeds"> <But text="Lets's go" /></Link>
    </div></div>

  );
}
