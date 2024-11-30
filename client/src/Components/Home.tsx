import { useState } from "react";
import JoinGame from "./JoinGame";
import CreateGame from "./CreateGame";
import axios from "axios";
import link from "../assets/link.json";
import { useNavigate } from "react-router";

const Home : React.FC = () => {
    const [join, setJoin] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleGenerateGame = async() => {
        console.log("click")
        try {
            const token = localStorage.getItem("token");
            const game = await axios.post(`${link.url}/generate-game`, {username: localStorage.getItem("username")}, {headers:{Authorization : `Bearer ${token}`}});
            if(game.status === 201){
                navigate(`/game?id=${game.data.game.gameId}`, {state: {game: game.data.game}});
            }
            console.log(game);
        } catch (error) {
            console.log(error);
        }
    }

    return(
    <>
    <div className="flex justify-center items-center min-h-dvh min-w-full flex-col">
        <div className="flex justify-center items-center space-x-5">
        <button onClick={handleGenerateGame} className="bg-cyan-500 hover:bg-cyan-700 hover:cursor-pointer rounded-full p-3 transition hover:text-white text-xs hover:font-bold">Create a New Game</button>
        <button onClick={()=>{
            setJoin(!join);
        }} className="bg-cyan-500 hover:bg-cyan-700 hover:cursor-pointer rounded-full p-3 transition hover:text-white text-xs hover:font-bold">Join A Game</button>
        </div>

        {join && <JoinGame/>}
    </div>
    </>
    )
}

export default Home;