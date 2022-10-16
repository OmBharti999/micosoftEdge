import slide from "./slide.mp4";
import Ct from "../../components/coloredText/ColoredText";
import But from "../../components/button/But";
import But2 from "../../components/button/But2";
import { Link } from "react-router-dom";

import "./acti.css";

export default function Activity() {
  return (
    <div className="sidebar-conataier">
      <div className="sidebar-first">
        <h1 className="start">
          Never miss a <br/>
          <Ct text="shopping deal" />
        </h1>
        <div className="start">
         Hover over your favorite retailers on the new tab page to see additional shopping information, saving you time and money.
          <div className="btn-div-flex">
            <But2 text="Try now" />
          </div>
        </div>
        <div className="start">
          <Link to="/sidebar"><But text="Next" /></Link>
        </div>
      </div>
      <div className="sidebar-sec">
        <video
          autoplay="autoplay"
          muted
          loop
          draggable="false"
          className="video-sidebar"
        >
          <source src={slide} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
