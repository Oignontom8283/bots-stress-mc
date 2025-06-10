import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from "socket.io";

import ApiBotsNew from './api/bots/new';
import ApiBotsLeaveAll from './api/bots/leaveAll';



const app = express();
const server = http.createServer(app);
const router = express.Router();
export const io = new Server(server, {
  cors: { origin: "*" } // autoriser tout le monde en dev
});


app.use(express.json());

app.use("/api/bots/new", ApiBotsNew);

app.use("/api/bots/leaveAll", ApiBotsLeaveAll);

export function startApiServer() {
  server.listen(3000, () => {
    console.log("Serveur backend sur http://localhost:3000");
  });
}
