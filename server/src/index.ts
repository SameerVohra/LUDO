import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port: number = parseInt(process.env.PORT || "3000");
const dbUrl: string | undefined = process.env.DB_URI;

mongoose.connect(dbUrl!)
  .then(()=>console.log("Connected To DB Successfully"))
  .catch((error)=>console.log(`Error Connecting to DB: ${error}`))

app.listen(port, ()=>{
  console.log(`Listening to port: ${port}`);
})
