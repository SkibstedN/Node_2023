import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

import templateEngine from "./util/templateEngine.js";

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Upper | welcome!"
});

const quests = templateEngine.readPage("./public/pages/quests/quests.html");
const questsPage = templateEngine.renderPage(quests, {
    tabTitle: "Upper | quests"
});


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/quests", (req, res) => {
    res.send(questsPage);
});

app.get("/jokes", async (req, res) => {
    const jokesPage = await templateEngine.renderJokePage();
    res.send(jokesPage);
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});