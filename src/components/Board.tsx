import {useState} from "react";
import Square from "./Square";
import calculateWinner from "../calculateWinner";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    let status;
    console.log(winner);

    if (winner) {
        status = `${winner} is the winner!`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    const clickHandler = (i: number) => {

        if (squares[i] || calculateWinner(squares)) return;

        const sqArray = [...squares];
        xIsNext ? sqArray[i] = 'X' : sqArray[i] = 'O'
        setSquares(sqArray);
        setXIsNext(!xIsNext);
    }

    return (
        <div>
        <div className="status">{status}</div>

        <div className="board-row">
                <Square value={squares[0]} onClick={() => {
                    clickHandler(0)
                }}/>
                <Square value={squares[1]} onClick={() => {
                    clickHandler(1)
                }}/>
                <Square value={squares[2]} onClick={() => {
                    clickHandler(2)
                }}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => {
                    clickHandler(3)
                }}/>
                <Square value={squares[4]} onClick={() => {
                    clickHandler(4)
                }}/>
                <Square value={squares[5]} onClick={() => {
                    clickHandler(5)
                }}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => {
                    clickHandler(6)
                }}/>
                <Square value={squares[7]} onClick={() => {
                    clickHandler(7)
                }}/>
                <Square value={squares[8]} onClick={() => {
                    clickHandler(8)
                }}/>
            </div>
        </div>
    );
};

export default Board;
