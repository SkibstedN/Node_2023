//random();
function random(min, max)  {
    return Math.floor(Math.random() * (max - min +1) - min);
}

const randomAnonymousFunction = function (min, max)  {
    return Math.floor(Math.random() * (max - min +1) - min)
};

const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) - min)

}

const randomArrowFunctionCompact = (min,max) => Math.floor(Math.random() * (max - min +1) - min);


//console.log(randomArrowFunctionCompact(0,20));

function genericActionPerformer(genericAction, genericName) {
        //do stuff...
        genericAction(genericName);

}

const subtract = (name) =>  ` ${name} is subtracting.`;
console.log(genericActionPerformer(subtract, "Tobias"));


// task without touching the two functions above but still using them below
// task make it console.log Tobias is subtracting
// task you must use both functions

const walk = (name) => `${name} is walking`;
console.log(genericActionPerformer(subtract, "Nicolas"));

/* assignment
make it say Nicolas is walking
*/



/*assignment
    read: andrea
*/

console.log(genericActionPerformer((name) => `${name} is reading`, "Andrea"));


