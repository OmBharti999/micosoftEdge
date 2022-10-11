import Card from "../../components/card/Card"

import Img1 from "./img/micro1st.png";
import Img2 from "./img/micro2nd.png";
import Img3 from "./img/micro3rd.png";

import "./getStarted.css";
export default function GetStarted() {
  return (
    <><h2>You're three steps away from getting the best browsing experience.
    </h2>
      <Img1 />
      <Card img={<Img1 />} />
    </>
  );
}
