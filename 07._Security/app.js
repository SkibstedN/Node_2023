import dotenv from "dotenv/config"

console.log(process.env.TEST);

import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../06._Svelte_Family/dist")));

import helmet from "helmet";
app.use(helmet());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from "express-session";
app.use(session({
    secret: 'SESSION_SECRET',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(apiLimiter);



app.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    req.session.hobby = req.query.hobby;
    res.send({ message: `Hi ${req.session.name}` });
});

app.get("/gotham", (req, res) => {
    if (!req.session.name) {
        return res.send({ message: "Error. You are not welcome in this city."});
    } 
    res.send({ message: `I remember you ${req.session.name} and your hobby is ${req.session.hobby}` });
});

app.get("/leavegotham", (req, res) => {
    req.session.destroy(() => {
        res.send({});
    });
});


app.get("/piblings", (req, res) => {
    res.send({ data: ["John", "Mark"] });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

