const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); //Here, we are using the fs module to read from and write to the birds.json file.

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let birds = [];

// read data from the birds.json file into the birds array...
fs.readFile('birds.json', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    birds = JSON.parse(data);
});

//Create a new bird and write it to the file
app.post("/birds", (req, res) => {
    const { name } = req.body;
    const id = birds.length + 1;
    const newBird = { id, name };
    birds.push(newBird);
  
    // Write data to the birds.json file
    fs.writeFile('birds.json', JSON.stringify(birds), err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Data written to file');
    });
  
    res.send(newBird);
  });

  //Prints all birds in the list
  app.get("/birds", (req, res) => {
    res.send(birds);
  });
  
  //Prints a specific bird from its id
  app.get( "/birds/:id", (req, res) => {
    const bird = birds.find(bird => bird.id === parseInt(req.params.id));
    if (!bird) {
      res.status(404).send("Bird not found.");
    } else {
      res.send(bird);
    }
  });
  
  app.listen(8080, () => {
    console.log("Server running on port", 8080);
  });
  