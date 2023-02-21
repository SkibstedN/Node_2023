const express = require('express');
//Importing the bodyParser middleware
const bodyParser = require('body-parser');
//Importing the fs module - it is providing the functionality we need to read and write from files
const fs = require('fs'); //.

const app = express();  //Creating a new instance of the Express application, which will be used to handle HTTP requests.

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

let birds = []; //Using 'let' since the value of birds is being reassigned later in the application.

// read data from the birds.json file into the birds array
fs.readFile('birds.json', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    birds = JSON.parse(data);  //Takes a string of JSON data and returns a JavaScript object.
});

//Create a new bird and write it to the file
app.post("/birds", (req, res) => {
    const { commonName, scientificName } = req.body;  //Destructuring assignment to extract the commonName and scientificName properties from the request body.

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


  //This method updates a single or all properties in an object in the birds array.
  app.put("/birds/:id", (req, res) => {

    //extracing the id parameter from the request URL using req.params.id. Since route parameters are always strings, parseInt() is used to convert the ID to a number.
    const id = parseInt(req.params.id); 

    //Search for the index of the bird with the specified ID - findIndex() returns -1 if no match is found.
    const birdIndex = birds.findIndex(bird => bird.id === id);

    if (birdIndex === -1) {
        res.status(404).send("Bird not found.");
        return;
    }

    const { commonName, scientificName } = req.body; //Destructuring assignment to extract the commonName and scientificName properties from the request body.
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


app.delete("/birds/:id", (req, res) => {
  const birdId = parseInt(req.params.id);

  //Creating a new array containing all elelments from the birds array tha have another id than the id passed in the request.
  const newBirds = birds.filter((bird) => bird.id !== birdId); 
  //Comparing langht of the arrays - if its the same then no bird was removed/the requested id was not found.
  if (newBirds.length === birds.length) {
    res.status(404).send("Bird not found.");
  } else {
    birds = newBirds; //The content of the original array is now replaced with the content of the filtered arrray.

    fs.writeFile("birds.json", JSON.stringify(birds), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error deleting bird.");
      } else {
        res.send("Bird deleted successfully.");
      }
    });
  }
});



  
  app.listen(8080, () => {
    console.log("Server running on port", 8080);
  });
  