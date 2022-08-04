import "./App.css";
import {
  cardback,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
} from "./image-index";

import { useEffect, useState } from "react";

let numbers = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7].sort(
  () => Math.random() - 0.5
);

function Game() {
  let [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <Board score={updateScore} />
      <div className="scorebox">Moves used: {score}</div>
    </div>
  );
}

function Card(props) {
  const [value, setValue] = useState(props.value);
  const [backImage, setBackImage] = useState(props.backImage);
  const [frontImage, setFrontImage] = useState(props.frontImage);
  const [flip, setFlip] = useState("false");
  const [currentImage, setCurrentImage] = useState(props.backImage);

  const handleFlip = () => {
    props.score();
    setFlip(!flip);
    setCurrentImage(flip ? frontImage : backImage);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={"flip-card-inner"}>
        <div className="card-image">
          <img src={currentImage} alt=""></img>
        </div>
      </div>
    </div>
  );
}

function Board(props) {
  const updateScore = props.score;

  return (
    <div className="crd-holder">
      <div>
        {renderCard(numbers[0], updateScore)}
        {renderCard(numbers[1], updateScore)}
        {renderCard(numbers[2], updateScore)}
        {renderCard(numbers[3], updateScore)}
      </div>
      <div>
        {renderCard(numbers[4], updateScore)}
        {renderCard(numbers[5], updateScore)}
        {renderCard(numbers[6], updateScore)}
        {renderCard(numbers[7], updateScore)}
      </div>
      <div>
        {renderCard(numbers[8], updateScore)}
        {renderCard(numbers[9], updateScore)}
        {renderCard(numbers[10], updateScore)}
        {renderCard(numbers[11], updateScore)}
      </div>
      <div>
        {renderCard(numbers[12], updateScore)}
        {renderCard(numbers[13], updateScore)}
        {renderCard(numbers[14], updateScore)}
        {renderCard(numbers[15], updateScore)}
      </div>
    </div>
  );
}

function renderCard(i, score) {
  switch (i) {
    case 0:
      return (
        <Card value={i} backImage={cardback} frontImage={card1} score={score} />
      );
    case 1:
      return (
        <Card value={i} backImage={cardback} frontImage={card2} score={score} />
      );
    case 2:
      return (
        <Card value={i} backImage={cardback} frontImage={card3} score={score} />
      );
    case 3:
      return (
        <Card value={i} backImage={cardback} frontImage={card4} score={score} />
      );
    case 4:
      return (
        <Card value={i} backImage={cardback} frontImage={card5} score={score} />
      );
    case 5:
      return (
        <Card value={i} backImage={cardback} frontImage={card6} score={score} />
      );
    case 6:
      return (
        <Card value={i} backImage={cardback} frontImage={card7} score={score} />
      );
    case 7:
      return (
        <Card value={i} backImage={cardback} frontImage={card8} score={score} />
      );
  }
}

export { Game };
