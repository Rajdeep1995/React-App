import React, { useState } from "react";
import un from './assets/un.png';
import unnamed from './assets/unnamed.png';
import heart from './assets/h.jpg';
import index from './Components/index.jsx';
import Stopwatch from "./Components/stopwatch.jsx";

function App() {
  const [imgSrc1, setImgSrc1] = useState(unnamed);
  const [imgSrc2, setImgSrc2] = useState(un);
  const [changeText, setChangeText] = useState("Change");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // State to handle visibility of heart images
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  // Function to change images and button text
  const changeImages = () => {
    if (changeText === "Change") {
      setImgSrc1(un);
      setImgSrc2(unnamed);
      setChangeText("Switched");
    } else {
      setImgSrc1(unnamed);
      setImgSrc2(un);
      setChangeText("Change");
    }
  };

  // Function to toggle heart image visibility and reset after 3 seconds
  const like1 = () => {
    setCount1((prevCount) => prevCount + 1);
    setIsVisible1(true);
    setTimeout(() => {
      setIsVisible1(false);
    }, 3000);
  };

  const like2 = () => {
    setCount2((prevCount) => prevCount + 1);
    setIsVisible2(true);
    setTimeout(() => {
      setIsVisible2(false);
    }, 3000);
  };

  return (
    <div className="con">
      <div className="card1" onDoubleClick={like1}>
        <img src={imgSrc1} id="c1" alt="Image 1" />
        <div className="img" id="im1" style={{ display: isVisible1 ? "block" : "none" }}>
          <img src={heart} alt="Heart" />
        </div>
      </div>
      <div className="bt">
        <button id="bt1" onClick={changeImages}>{changeText}</button>
        <p>Likes for Image 1: {count1}</p>
        <p>Likes for Image 2: {count2}</p>
      </div>


      <div className="card2" onDoubleClick={like2}>
        <img src={imgSrc2} id="c2" alt="Image 2" />
        <div className="img" id="im2" style={{ display: isVisible2 ? "block" : "none" }}>
          <img src={heart} alt="Heart" />
        </div>
      </div>
      <div className="stp">
        <Stopwatch name="st"/>
      </div>


    </div>
  );
}

export default App;