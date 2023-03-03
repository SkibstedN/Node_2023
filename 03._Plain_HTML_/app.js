const express = require("express");
const app = express();

app.use(express.static("public"));   //set "public" folder to be the static folder in express(for security resons)

const { getTanks, addTank } = require("./util/tanks.js");
//console.log(tanksUtil.getTanks());
//console.log(getTanks());


let visitorCount = 0;

/* Pages */ //C:\Users\nsk20\Node\Node_2023\03._Plain_HTML_\visitors\visitors.html


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html"); 
});



app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});

/* API */

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks});
})

app.get("/api/visitors", (req, res) => {
    res.send ({ data: visitorCount});
});

app.put("/api/visitors", (req, res) =>{
    res.send({data: ++visitorCount} );
});


// assignment Serve a page called museum guards
app.get("/museumGuards", (req, res) =>  {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html")
} );


const PORT = 8080;
app.listen(PORT, (error) =>  {
    if (error){
        console.log(error);
        return;
    }
    console.log("Server is running on ", PORT);
});

/* const PORT = 5000;
app.listen(5000, () => {
    console.log("Running on port 5000.");
  });

  module.exports = app; */