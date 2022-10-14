import "./feed.css";

import Ct from "../../components/coloredText/ColoredText";
import But from "../../components/button/But";
import Card2 from "../../components/card2/Card2"

import { Link } from "react-router-dom";

export default function Feed() {
  return (
    <div className="sidebar-conataier">
      <div className="sidebar-first">
        <h1 className="start">
          Explore the <Ct text="news feed" /> that feeds your interest
        </h1>
        <div className="start">
          Get the news you're interested in — all in one feed. Filter your news feed by trending news, sports, gaming, entertainment and more.
        </div>
        <div className="start">
          <Link to="/Shopping">  <But text="Next" /></Link>
        </div>
      </div>
      <div className="sidebar-sec">

        <Card2 />
      </div>
    </div>
  );
}
