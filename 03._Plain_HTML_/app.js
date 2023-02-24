const express = require("express");
const app = express();

app.use(express.static("public"));   //set "public" folder to be the static folder in express

const tanks = [
    {name: "leopard", nationality: "German"},
    {name: "Abrams", nationality: "USA"}
];

let visitorCount = 0;

console.log(__dirname + "/public/frontpage/frontpage.html")

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html"); 
});
//C:\Users\nsk20\Node\Node_2023\03._Plain_HTML_\public\frontpage\frontpage.html

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/visitors", (req, res) => 
    res.sendFile(__dirname + "/public/visitors/visitors.html");
)

//app.get("/api/tanks", (req, res) =>)

app.get("/api/visitors", (req, res) => {
    res.send ({ data: visitorCount});
});

app.put("/api/visitors", (req, res) =>{
    res.send({data: ++visitorCount} );
});


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