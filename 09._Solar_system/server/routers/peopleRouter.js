import { Router } from "express";
const router = Router();

router.get("/people", aync (req, res) => {
    res.send({ data: await db.all("SELECT * FROM people;")});
});

router.post("/people", (req, res) => {
    if (!req.body.name) {
    return res.status(400).send({ message: "Missing the key (name) in the body" });
    }

    const { lastID } = await db.run("INSERT INTO people (name, planet_id) VALUES (?, 3);", {req.body.name});
    console.log(result);

    res.send({
        id: lastID,
        name: req.body.name
    });
});

export default router;