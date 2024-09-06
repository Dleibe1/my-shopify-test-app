// web/routes/rootRouter.js

import express from 'express';
import userSessionsRouter from '../routes/api/v1/userSessionsRouter.js';

const rootRouter = new express.Router()

rootRouter.use("/api/v1/user-sessions", userSessionsRouter)

export default rootRouter