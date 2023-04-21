import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";

router.get("/planets", async (req, res) => {
    const test = await db.query("SELECT * FROM planets;");
    console.log("Test");

    res.send({ planets });

});

// 1 and add a row in the people table that points to the id of the planets (FOREIGN KEY)
// 2 Create a new router called people 
// 3 create a route where you can add new people 

router.post("/people")


export default router;