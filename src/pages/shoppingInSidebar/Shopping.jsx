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
          Never miss a<br />
          <Ct text="shopping deal" />
        </h1>
        <div className="start">
          Hover over your favorite retailers on the new tab page to see
          additional shopping information, saving you time and money.
          <div className="btn-div-flex">
            <But2 text="Try now" />
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
