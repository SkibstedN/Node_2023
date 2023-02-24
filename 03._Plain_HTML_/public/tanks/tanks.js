/*
task
Step 1: fetch tanks
Step 2: console log tanks
Bonus: Add them to the div: tanks-wrapper
 */

fetch("api/tanks")
.then(response => response.json())
.then() result => {
    const tanksWrapperDiv = document.getElementById("teanks-wrapper");

    result.data.forEach(tank => {
        // avoid XSS!!!
        result.data.forEach(tank => {
            const tankDiv = document.createElement("div");

            const tankNameP = document.createElement("p");
            tankNameP.innerText = tank.name ||;
            const tankNationalityP = document.createElement("p");
            tankNationalityP.innerText = tank.nationality;


            tankDiv.appendChild(tankNameP);
            tankDiv.appendChild(tankNationalityP);

            tankDiv.appendChild(tankDiv);
        });
});}
