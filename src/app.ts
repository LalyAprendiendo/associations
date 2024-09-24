import express, { json } from "express";
import indexRouter from "./routes";

const app = express();

app.use(json());

app.use("/", indexRouter);

export default app;
