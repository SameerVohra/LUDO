import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";
import {Server} from "socket.io"

dotenv.config();

const port: number = parseInt(process.env.PORT || "3000");
const dbUrl: string | undefined = process.env.DB_URI;
const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket)=>{
    console.log(`${socket.id} joined`);
})

mongoose.connect(dbUrl!)
  .then(()=>console.log("Connected To DB Successfully"))
  .catch((error)=>console.log(`Error Connecting to DB: ${error}`))



app.listen(port, ()=>{
  console.log(`Listening to port: ${port}`);
})
