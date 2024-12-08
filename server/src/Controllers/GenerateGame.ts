import {generateGameId} from "./GameDetails.ts";
import {generateGamePass} from "./GameDetails.ts";
import {Request, Response} from "express";
import gameModel from "../Models/Game.ts"

export const GenerateGame = async(req: Request, res: Response): Promise<void> => {
    const {username} = req.body;
    try {
        const gameId = generateGameId();
        const gamePass = generateGamePass();
        const newGame = new gameModel({
            username,
            gameId,
            gamePass,
        })

        await newGame.save();
        res.status(201).json({message: "Game Created", game: newGame});
    } catch (error) {
        res.status(501).json({error: error});
    }
}
