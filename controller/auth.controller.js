import express from 'express';
import { genAPIKey } from '../services/auth.service.js'

const router = express.Router();

// post endpoint, bekérés: user_id, return: apiKey

router.post("/getApiKey", async (req, res) => {
    const { user_id } = req.body;
    const apiKey = await genAPIKey(user_id)

    res.status(200).json({
        message: "Success",
        key: apiKey
    })
})

export { router }