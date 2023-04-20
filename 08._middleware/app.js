import express from "express";
const app = express();

function houseButler(req, res, next) {
    console.log("This way...");
    next();
}

app.use("/room", houseButler);

import roomRouter from "./routers/roomRouter.js";
app.use(roomRouter);

function guard(req, res, next) {
    if (req.query.name === "Anders") {
        req.myName = "Anders";
        next();
    } else {
        res.send({ message: "You are not allowed to enter" });
    }
}


app.get("/frontdoor", guard, (req, res) => {
    res.send({ message: `Please enter, ${req.myName}.` });
});

app.get("/inlinemiddleware", 
    (req, res, next) => {
        console.log("Enters here first");
        next();
    }, 
    (req, res, next) => {
        console.log("Is here now");
        res.send({ message: "Called the inline middleware" });
    }
);



app.get("*", (req, res) => {
    res.send("<h1>404 - Not Found</h1>")
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
