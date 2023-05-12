import express from "express";
const app = express();
app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A client connected", socket.id);

    socket.on("client chose a color", (data) => {

        //Broadcasts to all clients in the io namespace
        io.emit("a color was chosen", data);
        // only emits to the socket itself
        //socket.broadcast.emit("a color was chosen", data);
        
    });
    
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("server is running on", PORT));
