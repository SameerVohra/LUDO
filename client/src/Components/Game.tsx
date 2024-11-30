import { useLocation } from "react-router";
import Board from "./Board";

const Game: React.FC = () => {
    const location = useLocation();
    const game = location.state?.game;
    console.log(game);
    return(
        <>
        <h1>{game.username}</h1>
        <h3>{game.gameId}</h3>
        <h3>{game.gamePass}</h3>
        <Board/>
        </>
    )
}

export default Game;