import express from "express";
const app = express();

app.get("/sveltefamilymembers", (req, res) => {
    res.send({ data 123 });
})

const PORT = process.envPORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));