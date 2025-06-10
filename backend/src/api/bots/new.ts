// src/routes/newbots.ts
import express from "express";
import { Bot } from "../../bots";

const router = express.Router();

router.post("/", (req, res) => {

    const { ip, port, nbBots, prefix } = req.body;
    if (!ip || !port || !nbBots || !prefix) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    // Here you would typically handle the creation of new bots
    
    res.status(200).json({
        message: `Successfully created ${nbBots} bots with prefix "${prefix}" at ${ip}:${port}`,
    })

    try {
        for (let i = 0; i < nbBots; i++) {
            new Bot(ip, port, prefix)
            console.log(`Bot ${i + 1} created with prefix "${prefix}" at ${ip}:${port}`);
        }
    } catch (error) {
        console.error("Error creating bots:", error);
        res.status(500).json({ error: "Failed to create bots" });
        return;
    }

    res.status(200)
});

export default router;