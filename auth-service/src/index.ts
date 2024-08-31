import { urlencoded, json } from "express";
import express from "express";
import * as dotenv from 'dotenv';
import appRouter from "./routers/app.router";

dotenv.config();

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/health', (req, res) => {
  res.status(200).send('Health check - OK'); 
})

app.use('/api', appRouter);

export default app;