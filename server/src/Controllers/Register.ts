import { Request, Response } from "express";
import userModel from "../Models/User";
import bcrypt from "bcryptjs"

export const Register = async(req: Request, res: Response): Promise<void> => {
  const {username, email, password} = req.body;

  if(username.trim()==="" || email.trim()==="" || password.trim()===""){
    res.status(401).send("All fields are required");
    return;
  }

  try {
    const user = await userModel.findOne({$or: [{email: email, username: username}]});
    if(user){
        res.status(409).send("Email/username already in use");
        return;
    }

    const newUser = await new userModel({
        username,
        email,
        password: bcrypt.hashSync(password, 8)
    })

    await newUser.save();

    res.status(201).send("User Registered Successfully");
  } catch (error) {
    res.status(501).send("Internal Server Error");
  }

}
