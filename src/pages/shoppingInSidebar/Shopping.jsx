// import ImgSide from "./img/sidebar.png";
import Ct from "../../components/coloredText/ColoredText";
import But from "../../components/button/But";
import But2 from "../../components/button/But2";

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
                    Hover over your favorite retailers on the new tab page to see additional shopping information, saving you time and money.
                    <div className="btn-div-flex">
                        <But2 text="Try now" />
                    </div>
                </div>
                <div className="start">
                    <But text="Next" />
                </div>
            </div>
            <div className="sidebar-sec">
                <video
                    muted="muted"
                    loop="loop"
                    preload="metadata"
                    draggable="false"
                    className="video-sidebar">
                    <source className="img-sidebar" src="https://edgefrecdn.azureedge.net/shared/cms/lrs1c69a1j/section-videos/2c163eaaf3964bff98725b6a63d903e0.mp4" type="video/mp4" />
                </video>  </div>
        </div>
    );
}
