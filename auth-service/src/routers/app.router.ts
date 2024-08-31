import { Router } from "express";
import userRouter from "./Users/user.router";

const appRouter = Router();

// User Router
appRouter.use('/users', userRouter);



export default appRouter;