import { useState } from "react";
import "./App.css";

type SquareState = "O" | "X" | null;

type SquareProps = {
  value: SquareState;
  onClick: () => void;
};

const Square = (squareprops: SquareProps) => (
  <button className="square" onClick={squareprops.onClick}>
    {squareprops.value}
  </button>
);

type BoardState = [
  SquareState,
  SquareState,
  SquareState,
  SquareState,
  SquareState,
  SquareState,
  SquareState,
  SquareState,
  SquareState
];

type BoardProps = {
  squares: BoardState;
  onClick: (i: number) => void;
};

const App = (props: BoardProps) => {
  const renderSquare = (i: number) => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default App;
