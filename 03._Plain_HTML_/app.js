const express = require("express");
const app = express();

app.use(express.static("public"));   //set "public" folder to be the static folder in express

console.log(__dirname + "/public/frontpage/frontpage.html")

app.get("/", (req, res) => {
    res.sendFile("C:/Users/nsk20/Node/Node_2023/03._Plain_HTML_/public/frontpage.html");
});

//app.get("/tanks", (req, res))



const PORT = 8080;
app.listen(PORT, (error) =>  {
    if (error){
        console.log(error);
        return;
    }
    console.log("Server is running on ", PORT);
});

/* falsy values */
/* const falsy = null;
if(!falsy) {
    console.log("========================== OH NOOO ========================");
}   */