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

    const checkWinner = () => {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombination.length; i++) {
            const el = winningCombination[i];
            if (
                squares[el[0]] != null &&
                squares[el[0]] === squares[el[1]] &&
                squares[el[1]] === squares[el[2]]
            ) {
                return squares[el[0]];
            }
            // console.log("el0 " + squares[el[0]]);
        }
        return false;
    };

    const renderSquare = i => {
        return (
            <Square
                val={squares[i]}
                onClick={() => {
                    const nextSquareState = squares.slice();
                    const winner = checkWinner();
                    if (nextSquareState[i] == null && !winner) {
                        nextSquareState[i] = isONext ? "O" : "X";
                        setONext(!isONext);
                        setSquares(nextSquareState);
                    }
                }}
            />
        );
    };
    const winner = checkWinner();
    return (
        <div>
            {winner && <p>Winner {winner}</p>}
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
