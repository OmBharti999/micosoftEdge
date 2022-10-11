// import "./home.css";
// export default function Home() {
//   return <>Microsoft Edge has been updated</>}

import CT from "../../components/coloredText/ColoredText";
import "./home.css";
export default function Home() {
  return (
    <div className="home-page">
      <h1>
        {/* <span className="spacialcolor"></span> */}
        <CT text="Microsoft Edge" /> has been updated
      </h1>
      <div>Choose the web browser that puts you first</div>
      <button className="btn-letgo">Lets's go</button>
    </div>
  );
}
