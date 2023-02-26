const express = require("express");
const app = express();

app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html"); 
});




/* 
const PORT = 8080;
app.listen(PORT, (error) =>  {
    if (error){
        console.log(error);
        return;
    }
    console.log("Server is running on ", PORT);
});   
*/

const PORT = 5000;
app.listen(5000, () => {
    console.log("Running on port 5000.");
  });

  module.exports = app;