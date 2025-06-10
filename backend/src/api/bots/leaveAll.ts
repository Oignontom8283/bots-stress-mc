import express from "express";
import { Bot } from "../../bots";

const router = express.Router();

router.post("/", (req, res) => {
    // This endpoint is used to make all bots leave the server
    // In a real application, you would have logic here to iterate over all bots and make them leave
    // For now, we will just send a success message

    // Example: Assuming you have a global array of bots
    // bots.forEach(bot => bot.leave());
    
    let counte = 0;
    Bot.bots.forEach(bot => {
        bot.leave()
        counte =+ 1;
    })

    console.log("All bots have been instructed to leave the server.");

    res.status(200).json({counte:counte})
})

export default router;
