const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); //Here, we are using the fs module to read from and write to the birds.json file.

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let birds = [];

// read data from the birds.json file into the birds array
fs.readFile('birds.json', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    birds = JSON.parse(data);
});

//Create a new bird and write it to the file
app.post("/birds", (req, res) => {
    const { commonName, scientificName } = req.body;

    /*checks if the array is empty - if its empty the id is set to 1 - 
    else: Set the id of the new object to the id of the last object in the array + 1*/
    const id = birds.length > 0 ? birds[birds.length - 1].id + 1 : 1;

    const newBird = { id, commonName, scientificName };
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



  app.put("/birds/:id", (req, res) => {

    //extracing the id parameter from the request URL using req.params.id. Since route parameters are always strings, parseInt() is used to convert the ID to a number.
    const id = parseInt(req.params.id); 

    //Search for the index of the bird with the specified ID - findIndex() returns -1 if no match is found.
    const birdIndex = birds.findIndex(bird => bird.id === id);

    if (birdIndex === -1) {
        res.status(404).send("Bird not found.");
        return;
    }

    const { commonName, scientificName } = req.body; //Using destructuring assignment to extract the commonName and scientificName properties from the request body.
    const bird = { id, commonName, scientificName };
    birds[birdIndex] = bird; //Replacing the original object with the updated object.

    fs.writeFile('birds.json', JSON.stringify(birds), err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data written to file');
    });

    res.send(bird);
});

  
  app.listen(8080, () => {
    console.log("Server running on port", 8080);
  });
  