const { tanks } = require("./tanks.json");

function getTanks()  {
    //tanks.push(tank);
    return tanks;
};

function addTank(tank) {
    tanks.push(tank);
    return tanks;
};

module.exports = {
    getTanks,
    addTank
};