import React, { useState } from 'react';

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleSquareClick = (index) => {
        if (squares[index] || calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl mb-4">{status}</h1>
            <div className="grid grid-cols-3 gap-2">
                {squares.map((square, index) => (
                    <button
                        key={index}
                        className="w-24 h-24 text-3xl font-bold bg-gray-200 hover:bg-gray-300"
                        onClick={() => handleSquareClick(index)}
                    >
                        {square}
                    </button>
                ))}
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setSquares(Array(9).fill(null))}
            >
                Restart
            </button>
        </div>
    );
};

export default TicTacToe;