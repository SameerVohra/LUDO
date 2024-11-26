import express from "express";
import cors from "cors";
import {Login} from "./Controllers/Login.ts"
import {Register} from "./Controllers/Register.ts"

const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());

app.post("/register", Register);
app.post("/login", Login);

export default app;
