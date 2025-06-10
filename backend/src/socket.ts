import { io } from "./api"

io.on("connection", (socket) => {
    console.log("Client connected with ID:", socket.id), "IP:", socket.handshake.address;

    socket.on("disconnect", () => {
        console.log("Client disconnected with ID:", socket.id, "IP:", socket.handshake.address);
    });
});