import express from 'express';
import { addMessage, deleteMessage, listAllMessages, updateMessage } from '../services/chat.service.js'

const router = express.Router();

router.get("/getAll", async (req, res) => {
    const data = await listAllMessages()
    res.status(200).json(data);
})

router.post("/add", async (req, res) => {
    const { content, sender_id, to_id } = req.body;

    await addMessage(content, sender_id, to_id);

    res.status(201).json({
        message: "Data successfully inserted"
    })
})

router.delete("/delete", async (req, res) => {
    const id = Number(req.query.id);
    
    await deleteMessage(id)

    res.status(204).json({
        message: "Data successfully deleted"
    })
})

router.put("/update", async (req, res) =>{
    const id = Number(req.query.id);
    const { content } = req.body;

    await updateMessage(id, content);

    res.status(200).json({
        message: "Data successfully updated"
    })
})

export { router };