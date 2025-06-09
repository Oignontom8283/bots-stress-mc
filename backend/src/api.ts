import express from 'express';
import http from 'http';
import cors from 'cors';
import { WebSocketServer } from 'ws';

import ApiBotsNew from './api/bots/new';

const app = express();
const server = http.createServer(app);

const wss = new WebSocketServer({ server});
const router = express.Router();

wss.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (message) => {
        
    })

})

app.use(cors());
app.use(express.json());

app.use("/api/bots/new", ApiBotsNew);

app.listen(3000, () => {
  console.log("Serveur backend sur http://localhost:3000");
});