//const app = require("express")();


const express = require("express");
const app = express();  

app.use(express.json());


// rout (entire ting)
// HTTP method
// |    endpoint   callback function

app.get("/", (req, res) => {
    res.send({  message: "Our first route" }) ;
});

let bicycleSpins = 0;
app.get("/spinnthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({ message: `People have spun the bicycle wheel ${bicycleSpins} times`});
});

app.get("/about", (req, res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about page now READ IT!.</h3>
    `);
})

// /bat?adjective=spooky = a query string
app.get("/bat", (req, res) => {
    console.log(req.query);
    res.send({message: `The bat is ${req.query.adjective}` });
});

console.log(new Date());
console.log(Date());
console.log(Date.now());

/* Time */
app.get("/time", (req, res) =>{
    res.send({ 
        time:  new Date(),
        timeLocal: Date(),
        unixTimestamp: Date.now()
    });
});

const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];

    // assignment: get the current day and month in English res.send({ data: days[new Date().getDay()]});
app.get("/time/day", (req, res) => {
    const today = new Date();
    const options = { weekday: 'long' };
    const day = new Intl.DateTimeFormat('en-US', options).format(today);
    res.send({ currentDay: day});
});

const months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Okt","Now","Dec"];

app.get("/time/month", (req, res) => {
    const today = new Date();
    const options = { month: 'long' };
    const month = new Intl.DateTimeFormat('en-US', options).format(today);
    res.send({ currentMonth: month});
});




// /bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({bottleSize: req.params.bottleSize });
})

app.post("/package", (req, res ) =>  {
    console.log(req.body);
    res.send({ message: req.body });
});


app.listen(8080);


//console.log(app);