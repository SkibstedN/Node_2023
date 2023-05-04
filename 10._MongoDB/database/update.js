import db from "./connection.js";

db.shops.updateOne( {city: "Vesterbro"}, { $push: { shops: { name: "Candyheaven"}}} );