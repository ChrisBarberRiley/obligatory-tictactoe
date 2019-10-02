import React, { useState } from "react";

function Square({ val, onClick }) {
    return (
        <button className="square" onClick={onClick}>
            {val}
        </button>
    );
}

const App = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isONext, setONext] = useState(false);

    const renderSquare = i => {
        return (
            <Square
                val={squares[i]}
                onClick={() => {
                    const nextSquareState = squares.slice();
                    nextSquareState[i] = isONext ? "O" : "X";
                    setONext(!isONext);
                    setSquares(nextSquareState);
                }}
            />
        );
    };
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
