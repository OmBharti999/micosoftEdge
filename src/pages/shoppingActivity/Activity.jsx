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
          {" "}
          <Ct text="Multitasking" /> with your sidebar{" "}
        </h1>
        <div className="start">
          Get more done on the web with tools, apps, and more just a click away.
          Say goodbye to switching tabs.
          <div className="btn-div-flex">
            <But2 text="Office on sidebar" />
            <But2 text="Outlook on sidebar" />
            <But2 text="Discover on sidebar" />
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
