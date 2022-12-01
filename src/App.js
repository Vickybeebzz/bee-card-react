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
    </div>
  );
}

function Card(props) {
  const data = props.data;
  const handleFlip = props.handleFlip;

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={"flip-card-inner"}>
        <div className="card-image">
          <img src={data.image} alt=""></img>
        </div>
      </div>
    </div>
  );
}

function Board(props) {
  const updateScore = props.score;

  let deck = [];

  for (let i = 0; i < 16; i++) {
    deck[i] = { id: i, value: numbers[i], flipped: false, image: cardback };
  }

  const handleFlip = () => {
    deck.map((card) => {
      if (card.id === props.id) {
        return;
      }
    });
  };

  return (
    <div className="crd-holder">
      <div>
        <Card handleFlip={handleFlip} data={deck[0]} />
        <Card handleFlip={handleFlip} data={deck[1]} />
        <Card handleFlip={handleFlip} data={deck[2]} />
        <Card handleFlip={handleFlip} data={deck[3]} />
      </div>
      <div>
        <Card handleFlip={handleFlip} data={deck[4]} />
        <Card handleFlip={handleFlip} data={deck[5]} />
        <Card handleFlip={handleFlip} data={deck[6]} />
        <Card handleFlip={handleFlip} data={deck[7]} />
      </div>
      <div>
        <Card handleFlip={handleFlip} data={deck[8]} />
        <Card handleFlip={handleFlip} data={deck[9]} />
        <Card handleFlip={handleFlip} data={deck[10]} />
        <Card handleFlip={handleFlip} data={deck[11]} />
      </div>
      <div>
        <Card handleFlip={handleFlip} data={deck[12]} />
        <Card handleFlip={handleFlip} data={deck[13]} />
        <Card handleFlip={handleFlip} data={deck[14]} />
        <Card handleFlip={handleFlip} data={deck[15]} />
      </div>
    </div>
  );
}

export { Game };
