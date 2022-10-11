import Card from "../../components/card/Card";

import Img1 from "./img/mico1st.png";
import Img2 from "./img/mico2nd.png";
import Img3 from "./img/micro3rd.png";
import "./getStarted.css";
// import { Button } from "bootstrap";
import Button from "react-bootstrap/Button";

const arr = [
  {
    src: Img1,
    title: "Import your browsing data",
    detail:
      "Get your history, favorites, passwords and more from other browsers, so you can continue browsing seamlessly.",
    buttontext: "Import",
  },
  {
    src: Img2,
    title: "Stay in sync while on the go",
    detail:
      "Download the Microsoft Edge app to continue browsing on your phone and stay in sync across your devices.",
    buttontext: "Download Now",
  },
  {
    src: Img3,
    title: "Discover more features",
    detail:
      "Learn about the easy-to-use built-in tools that help protect you online, improve performance, and save money when you shop.",
    buttontext: "Explore",
  },
];

export default function GetStarted() {
  return (
    < div className="getstarcontainer">
      <h2>
        You're three steps away from getting the best browsing experience.
      </h2>
      <div className="div-container-card">
        {" "}
        {/* <Img1 /> */}
        {arr.map((i) => (
          <Card det={i} />
        ))}
      </div>
      <h3>Enjoy these latest features and much more with Microsoft Edge.</h3>
      <Button variant="primary">
        Start Browsing<i class="fa-solid fa-inbox-out"></i>
      </Button>{" "}
    </div>
  );
}
