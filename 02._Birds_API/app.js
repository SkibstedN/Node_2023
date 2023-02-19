//The require function allows us to include and use modules in our code,
//in this case the "express" module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Defines a constant variable birds that is assigned an array of bird objects.
//This is done to have some in memory data for the HTTP responses.
const birds = [{name: "Crow", id: 1}, {name: "Raven", id: 2}
,{ name: "Woodpecker", id: 3}, {name: "Blackbird", id: 4}];



app.post("/birds", (req, res) => {
    const { name } = req.body;
    const id = birds.length + 1;
    const newBird = { id, name };
    birds.push(newBird);
    res.send(newBird);
  });




//This method listens for HTTP GET requests to the "/birds" URL and returns a response when a request is recieved.
// In this case all objects in the birds array.
app.get("/birds", (req, res) => {
    res.send(birds);
});



//Listening for HTTP GET requsts to the "/birds/:id" URL, where
//"id" is a placeholder for a specific bird's id.
app.get( "/birds/:id", (req, res) => {
    //Preparing the response and error message.
    const bird = birds.find(bird => bird.id === parseInt(req.params.id));
    console.log(req.params);
    if (!bird) {
        res.status(404).send("Bird not found.");
    } else{
        res.send(bird);
    }
});


//app.listen(8080);

app.listen(8080, () => {console.log("Se4rver running on port", 8080);
})
