import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

//import jokes from "./util/jokes.js";
import renderPage from "./util/templateEngine.js";
import templateEngine from "./util/templateEngine.js";

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Upper | welcome!"
});



const questsPath = templateEngine.readPage("./public/pages/quests/quests.html");
const questsPage = templateEngine.renderPage(questsPath, "Upper | quests");

// pages
//const frontpage = fs.readFileSync("./public/pages/components/frontpage/frontpage.html").toString();
//const quests = fs.readFileSync("./public/pages/components/quests/quests.html").toString();
//const jokes = fs.readFileSync("./public/pages/components/jokes/jokes.html").toString();
// task read the other files and serve them


//constructed pages
//const frontpagePage = renderPage(fronpagePath);
//const jokesPage = navbar + jokes + footer;
//const questPage = navbar + quests + footer;



app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/quests", (req, res) => {
    res.send(questsPage);
});

app.get("/jokes", async (req, res) => {
    const joke = await getJoke();
    const jokesPath = templateEngine.readPage("./public/pages/jokes/jokes.html")
        .replace("$JOKE", JSON.stringify(joke));
    const jokesPage = templateEngine.renderPage(jokesPath, { 
    tabTitle: "Upper | jokes",
    cssLink: `<link rel="stylesheet" href="/pages/jokes.jokes.css">`
 });
    res.send(jokesPage);
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});