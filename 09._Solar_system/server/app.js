import express from "express";
const app = express();

import planetsRouter from "./routers/planetsRouter.js";
app.use(planetsRouter);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log("1: Server is running on port", server.address().port));



