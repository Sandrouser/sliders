import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import img from "./data";

function Slider() {
  const [number, setNumber] = useState(0);

  function click() {
    const newimg = (number + 1) % img.length;
    setNumber(newimg);
    // if (number === img.length - 1) {
    //   setNumber(0);
    // } else {
    //   setNumber(number + 1);
    // }
  }
  function click2() {
    const newimg = (number - 1 + img.length) % img.length;
    setNumber(newimg);
    // if (number === 0) {
    //   setNumber(img.length - 1);
    // } else {
    //   setNumber(number - 1);
    // }
  }

  return (
    <div className="mainslider">
      <div className="imges">
        <button>
          <FaArrowAltCircleLeft onClick={click2} />
        </button>
        <img src={img[number]} alt="" />
        <button>
          <FaArrowAltCircleRight onClick={click} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
