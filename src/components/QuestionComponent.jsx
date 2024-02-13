import { useEffect, useRef, useState } from "react";

import("./css/component.css");

export const Question = ({ onYes }) => {
  const [count, setCount] = useState(0);
  const [sizeY, setSizeY] = useState(70);
  const [sizeN, setSizeN] = useState(70);
  const [sum, setSum] = useState(10);
  const [pos, setPos] = useState("relative");
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const ref = useRef(0);
  const windowWidth = window.innerWidth;
  const windowHeigth = window.innerHeight;

  const getSize = (count) => {
    return "scale(" + count + ")";
  };


  const handleClick = () => {
    setCount(count + 1);
    setSizeY(sizeY + sum);
    setSizeN(sizeN - 16);
    setPos("absolute");
    let s = ref.current.clientWidth;
    let minW = ((windowWidth / 2) - s) * -1;
    let maxW = windowWidth / 2;
    let minH = (windowHeigth / 2) * -1;
    let maxH = windowHeigth / 2;
    let margin = s / 2;
    let min = ((minW + (s + (windowWidth / 8))) + margin) - 150
    let r1 = Math.random() * (maxW - min) + min;
    let r2 = Math.random() * maxH + minH;
    console.log(s);
    // setLeft(Math.random() * (screen.width - 150));
    setLeft(r1);
    setTop(r2);
    setSum(40);
  };

  const texts = [
    "NO",
    "SEGURA",
    "ME ROMPES",
    "PIENSALO BIEN",
    "INTENTALO OTRA VEZ",
  ];

  const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWIyaG02cmc5YjZsaW04Z3lmbmQyd2E5cGx4OGQxdDVldDc4cXgxZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/4Os8jam0MS0dZ7ninc/giphy.gif",
    "https://i.pinimg.com/originals/e0/73/b2/e073b2845004817bd41b936ab12f6b39.gif",
    "https://i.pinimg.com/originals/26/19/76/26197684cd65449508b6ceb08410f5f6.gif",
    "https://i.pinimg.com/originals/f1/70/aa/f170aad90818e1d06cf59c6f9bb60571.gif",
    "https://img.wattpad.com/c7b9778cf8fef077e4cc8c9f2ad01b87f6eca436/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f774d665a577566626873707336513d3d2d38333231363035352e313566663163646130373538336332613334303936363532323936372e676966?s=fit",
  ];

  const getText = () => {
    return texts[Math.min(count, texts.length - 1)];
  };
  const getGifs = () => {
    return gifs[Math.min(count, gifs.length - 1)];
  };

  return (
    <div className="holder">
      <div className="gifHolder">
        <img className="gif" src={getGifs()} alt="valentine img" />
      </div>
      <div className="buttonHolder">
        <button
          className="green"
          style={{ fontSize: sizeY + "px" }}
          onClick={onYes}
        >
          SI
        </button>
        {sizeN > 14 && (
          <button
            ref={ref}
            className="red"
            onClick={(e) => handleClick()}
            style={{
              fontSize: sizeN + "px",
              position: pos,
              top: top + "px",
              left: left + "px",
            }}
          >
            {getText()}
          </button>
        )}
      </div>
    </div>
  );
};
