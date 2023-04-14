import { Router } from "express";
const router = Router();

router.get("/room", (req, res, next) => {
    res.send({ message: " The test works"});

});

export default router;