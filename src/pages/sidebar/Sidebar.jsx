import ImgSide from "./img/sidebar.png";
import Ct from "../../components/coloredText/ColoredText";
import But from "../../components/button/But"

import "./si.css";

export default function Sidebar() {
  return (
    <div className="sidebar-conataier">
      <div className="sidebar-first">
        <h1>
          {" "}
          <Ct text="Multitasking" /> with your sidebar{" "}
        </h1>
        <div>
          Get more done on the web with tools, apps, and more just a click away.
          Say goodbye to switching tabs.
        </div>

        <But text="Next" />
      </div>
      <div className="sidebar-sec">
        <img className="sidebar-sec" scr={ImgSide} alt="side" />
      </div>
    </div>
  );
}
