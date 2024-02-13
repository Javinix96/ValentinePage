import { useState } from "react";
import "./App.css";
import { Question } from "./components/QuestionComponent";
import { Yes } from "./components/YesComponent";
import Confetti from 'react-confetti'

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [yes, setYes] = useState(false);

  const onYes = (e) => {
    setYes(true);
  };

  return (
    <>
      <div className="holdTitle">
        <h1 className="title">WOULD YOU BE MY VALENTINE?</h1>
      </div>
      <main className="back">
        {yes ? <Yes /> : <Question onYes={onYes} />}
        {yes && <Confetti
        gravity={0.5}
        confettiSource={{x:0, y: 0, w:width, h:height}}
      width={width}
      height={height}
    />}
      </main>
    </>
  );
}

export default App;
