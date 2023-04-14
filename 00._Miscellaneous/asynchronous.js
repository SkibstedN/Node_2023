



new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw "Error message";
            resolve("Yaaaay");
        } catch (errorMessage) {
            reject(errorMessage);
        }
    }, 3000);
})
.then(successMessage => console.log("successMessage", successMessage))
.catch(errorMessage => console.log(errorMessage));




// return a promise that celebrates or not(up to you)
function celebrate() {
    return new Promise((resolve, reject) => {
        resolve("Hooray");
    });
}

celebrate()
.then(celebrationMessage => console.log(celebrationMessage));
// call celebrate and handle the resolve / reject


function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Icecream");
            } catch {
                reject("Dogpoo");
            }
        }, 3000);
    })
    
}

somethingGoodSomethingBad()
.then(console.log)
.catch(console.log);


// IIFE

(async function getGoodOrBadMessage() {
    const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
    console.log(somethingGoodSomethingBadMessage);
})()

