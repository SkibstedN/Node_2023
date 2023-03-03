import express from "express";
const app = express();

import path from "path";

//app.use(express.static("public"));


//console.log(path.resolve("/public/pages/frontpage/frontpage.html"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/quests", (req, res) => {
    res.sendFile(path.resolve("public/pages/quests/quests.html"));
});



const PORT = 8080;
app.listen(PORT, (error) =>  {
    if (error){
        console.log(error);
        return;
    }
    console.log("Server is running on ", PORT);
});
