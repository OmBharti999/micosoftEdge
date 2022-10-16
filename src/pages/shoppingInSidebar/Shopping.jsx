import ImgSide from "./shopping.jpg";
import Ct from "../../components/coloredText/ColoredText";
import But from "../../components/button/But";
import But2 from "../../components/button/But2";
import { Link } from "react-router-dom";

import "./shopping.css";

export default function Shopping() {
  return (
    <div className="sidebar-conataier">
      <div className="sidebar-first">
        <h1 className="start">
          Personalized <br />
          <Ct text="shopping" />
        </h1>
        <div className="start">
         The sidebar in Microsoft Edge allows you to shop your personal feed without leaving your browser window, allowing you to stay in your flow.
    <div className="btn-div-flex">
            <But2 text="Start shopping" />
          </div>
        </div>
        <div className="start">
          <Link to="/activity"><But text="Next" /></Link>
        </div>
      </div>
      <div className="sidebar-sec">
        <img className="imge-sidebar" src={ImgSide} alt="img-shopping" />
      </div>
    </div>
  );
}
