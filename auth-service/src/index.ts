import { urlencoded, json, application } from "express";
import express from "express";
import { notFound } from "./middleware/not-found";
import { error } from "./middleware/error";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(notFound);
app.use(error);

const port = process.env.PORT || 4000;

application.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;