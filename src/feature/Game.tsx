import { Button } from "../components/ui/button";
import { useState } from "react";

type Player = "X" | "O" | "";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Game() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "Draw" | null>(null);
  const [winningCells, setWinningCells] = useState<number[]>([]);

  const checkWinner = (newBoard: Player[]) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinningCells(combo);
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);

    if (result) {
      setWinner(result);
    } else if (!newBoard.includes("")) {
      setWinner("Draw");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
    setWinningCells([]);
  };

  return (
    <div className="flex flex-col items-center justify-center py-24 mt-6 h-full ">
      {/* <h1 className="text-4xl font-bold mb-4">Tic Tac Toe</h1> */}

      <p className=" text-3xl text-cyan-500 font-bold tracking-tight mb-12">
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Current Player: ${currentPlayer}`}
      </p>

      <div className="grid grid-cols-3 gap-4">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`w-[100px] h-24 text-3xl border border0 font-bold rounded-xl transition
              ${
                winningCells.includes(i)
                  ? "bg-cyan-300/50 text-gray-800"
                  : "bg-gray-50 hover:bg-white"
              }`}
          >
            {cell}
          </button>
        ))}
        <Button
        onClick={resetGame}
        variant={"outline"}
        // size={""}
        className="bg-cyan-200 border-teal-100 hover:bg-cyan-300 text-gray-800 mt-6 col-span-3"
      >
        Reset Game
      </Button>
      </div>

     
    </div>
  );
}
