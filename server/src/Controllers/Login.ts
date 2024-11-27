import {Request, Response} from "express";
import userModel from "../Models/User.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const Login = async(req: Request, res: Response) => {
    const {username, password} = req.body;
    if(username.trim()==="" || password.trim()===""){
        res.status(401).send("All fields are required");
        return ;
    }

    try {
        const user = await userModel.findOne({username: username});

        if(!user){
            res.status(404).send("Wrong Email/Username");
            return ;
        }

        if(!bcrypt.compare(password, user.password)){
            res.status(404).send("Wrong Password");
            return;
        }

        const tokenPayload = {username:user.username, userId: user._id};
        if(!process.env.SECRET_KEY){
            throw new Error("Secret key not defined");
        }

        const token: string = jwt.sign(
            tokenPayload,
            process.env.SECRET_KEY as string,
        )

        res.status(201).json({message: "Login Successful", token: token});

    } catch (error) {
        res.status(501).send("Internal Server Error");
    }
}
