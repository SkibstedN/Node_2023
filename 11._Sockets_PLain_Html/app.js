import express from "express";
const app = express();
app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A client connected", socket.id);

    socket.on("ready event", (data) => {
        console.log("From the ready event:", data.data);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("server is running on", PORT));
