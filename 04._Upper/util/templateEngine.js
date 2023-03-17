import fs from "fs";
import getJoke from "./jokes";
import escape from "escape.html";
// components
// read the navbar and the footer here


function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/pages/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "");
    const footer = fs.readFileSync("./public/pages/components/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

   // const page = fs.readFileSync(pagePath).toString();
    return navbar + page + footer;
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

function renderJokePage(joke) {
    const path = "./public/pages/jokes/jokes.html";
    let jokePage = readPage(path);
    const joke = await getJoke();
    if (joke.joke)  {

    }else if (joke.setup && joke.delivery) {
        const jokeHtmlContent = `
        <h3>${joke.setup}</h3>
        <h4>...</h4>
        <h3>`;
    }else {
        jokePage = jokePage.replace("$JOKE_HTML_CONTENT", <h3>No jokes for you</h3>)
    }

    const constructedPage = renderPage(jokePage, { 
        tabTitle: "Upper"

;    })
}

export default{
    renderPage,
     readPage};