import Card from "../../components/card/Card";

import Img1 from "./img/mico1st.png";
import Img2 from "./img/mico2nd.png";
import Img3 from "./img/micro3rd.png";

const arr = [
  {
    src: Img1,
    discription: "Import your browsing data",
    detail:
      "Get your history, favorites, passwords and more from other browsers, so you can continue browsing seamlessly.",
  },
  {
    src: Img2,
    discription: "Stay in sync while on the go",
    detail:
      "Download the Microsoft Edge app to continue browsing on your phone and stay in sync across your devices.",
  },
  {
    src: Img3,
    discription: "Discover more features",
    detail:
      "Learn about the easy-to-use built-in tools that help protect you online, improve performance, and save money when you shop.",
  },
];

import "./getStarted.css";
export default function GetStarted() {
  return (
    <>
      <h2>
        You're three steps away from getting the best browsing experience.
      </h2>
      {/* <Img1 /> */}
      {arr.map((i) => (
        <Card det={i} />
      ))}
    </>
  );
}
