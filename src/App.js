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

import { useState } from "react";

let numbers = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7].sort(
  () => Math.random() - 0.5
);
let previousCard = -1;
let previousId = -1;
let pairs = 0;

function Game() {
  let [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <Board score={updateScore} />
      <div className="scorebox">Moves used: {score}</div>
      <div className="scorebox">Pairs: {pairs}</div>
      <div className="scorebox">Previous: {previousCard}</div>
    </div>
  );
}

function Card(props) {
  const id = props.id;
  const value = props.value;
  const backImage = props.backImage;
  const frontImage = props.frontImage;
  const [flip, setFlip] = useState(false);
  const [currentImage, setCurrentImage] = useState(backImage);

  const handleFlip = () => {
    if (flip) return;
    props.score();
    setFlip(!flip);
    setCurrentImage(flip ? backImage : frontImage);
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
        {renderCard(numbers[0], updateScore, 0)}
        {renderCard(numbers[1], updateScore, 1)}
        {renderCard(numbers[2], updateScore, 2)}
        {renderCard(numbers[3], updateScore, 3)}
      </div>
      <div>
        {renderCard(numbers[4], updateScore, 4)}
        {renderCard(numbers[5], updateScore, 5)}
        {renderCard(numbers[6], updateScore, 6)}
        {renderCard(numbers[7], updateScore, 7)}
      </div>
      <div>
        {renderCard(numbers[8], updateScore, 8)}
        {renderCard(numbers[9], updateScore, 9)}
        {renderCard(numbers[10], updateScore, 10)}
        {renderCard(numbers[11], updateScore, 11)}
      </div>
      <div>
        {renderCard(numbers[12], updateScore, 12)}
        {renderCard(numbers[13], updateScore, 13)}
        {renderCard(numbers[14], updateScore, 14)}
        {renderCard(numbers[15], updateScore, 15)}
      </div>
    </div>
  );
}

function renderCard(i, score, id) {
  switch (i) {
    case 0:
      return (
        <Card
          value={i}
          backImage={cardback}
          frontImage={card1}
          score={score}
          id={id}
        />
      );
    case 1:
      return (
        <Card
          value={i}
          backImage={cardback}
          frontImage={card2}
          score={score}
          id={id}
        />
      );
    case 2:
      return (
        <Card
          value={i}
          backImage={cardback}
          frontImage={card3}
          score={score}
          id={id}
        />
      );
    case 3:
      return (
        <Card
          value={i}
          backImage={cardback}
          frontImage={card4}
          score={score}
          id={id}
        />
      );
    case 4:
      return (
        <Card
          value={i}
          backImage={cardback}
          frontImage={card5}
          score={score}
          id={id}
        />
      );
    case 5:
      return (
        <Card
          value={i}
          backImage={cardback}
          frontImage={card6}
          score={score}
          id={id}
        />
      );
    case 6:
      return (
        <Card
          value={i}
          backImage={cardback}
          frontImage={card7}
          score={score}
          id={id}
        />
      );
    case 7:
      return (
        <Card
          value={i}
          backImage={cardback}
          frontImage={card8}
          score={score}
          id={id}
        />
      );
  }
}

export { Game };
