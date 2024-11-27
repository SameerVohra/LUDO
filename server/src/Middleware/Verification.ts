import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface DecodedUser extends JwtPayload {
  userId: string;
  username: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: DecodedUser;
    }
  }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    res.status(401).send("Access Denied. No token provided.");
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string) as DecodedUser;
    if (!decoded || !decoded.userId) {
      res.status(400).send("Invalid token payload.");
      return;
    }
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).send("Token expired. Please login again.");
    } else if (error instanceof jwt.JsonWebTokenError) {
      res.status(400).send("Invalid token.");
    } else {
      res.status(500).send("Internal Server Error");
    }
    return;
  }
};
