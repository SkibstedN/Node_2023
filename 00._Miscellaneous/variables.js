//Rule 1: Have to assign a value when declaring.
const me = 
{
    name: "Ole"
};

const hobbies = ["Football", "Swimming"]
hobbies.push("Cooking")
me.hobbies = hobbies;

//rule 2: cannot reassign to constant
//me = {};
me.name = "Hans";

console.log(me);

const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
const hobbyThree = `Cooking skill level: "'${2+2}"'`;
console.log(hobbyThree);
    
