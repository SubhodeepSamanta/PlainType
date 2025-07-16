import { verifyWebhook } from "@clerk/express/webhooks";
import { Webhook } from "svix";
import User from "../models/user.model.js";

export const webhookController = async (req, res) => {
    const WEBHOOK= process.env.CLERK_WEBHOOK_SIGNING_SECRET;
    if(!WEBHOOK){
        return res.status(400).send("Error verifying webhook");
    }
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK);
    let evt;
    try {
        evt = wh.verify(payload, headers);
        if (evt.type === "user.created") {
            const newUser= new User({
                clerkUserId: evt.data.id,
                username: evt.data.username || evt.data.email_addresses[0].email_address,
                email: evt.data.email_addresses[0].email_address,
                img: evt.data.image_url
            })
            await newUser.save();
            return res.send('User Created');
        }
        return res.status(200).send('webhook recieved');
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return res.status(400).send("Error verifying webhook");
    }
};
