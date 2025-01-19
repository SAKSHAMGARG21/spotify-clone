import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true,
}));

app.use(cookieParser());
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: true, limit: "16mb" }));
app.use(express.static("public"));

// app.get("/api/v1/user/sendOtp", (req, res) => {
//     res.send("this is soptify backend");
// })

import userRouter from "./routes/user.routes.js"
import songRouter from "./routes/song.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import albumRouter from "./routes/album.routes.js"
app.use("/api/v1/user", userRouter);
app.use("/api/v1/song", songRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/album",albumRouter);

export default app;