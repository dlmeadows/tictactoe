import Board from "./Board";
import {useState} from "react";


const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const latestHistory = history[history.length - 1];

    const handlePlay = (nextSquares: any) => {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={latestHistory} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{}</ol>
            </div>
        </div>
    );
};

export default Game;
