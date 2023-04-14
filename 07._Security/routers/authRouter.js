// task finish this file
import {Routers } from "express";
const router = Router();

router.post("/auth/login", (req, res) => {
    res.send({})
});

router.get("auth/logout", (req, res) => {
    res.send();
});

export default router;