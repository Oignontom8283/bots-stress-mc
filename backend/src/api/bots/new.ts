// src/routes/newbots.ts
import express from "express";

const router = express.Router();

router.post("/newbots", (req, res) => {

    const { ip, port, nbBots, prefix } = req.body;
    if (!ip || !port || !nbBots || !prefix) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    // Here you would typically handle the creation of new bots
    


});

export default router;