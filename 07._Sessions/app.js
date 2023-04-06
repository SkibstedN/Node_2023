import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../06._Svelte_Family/dist")));

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

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

