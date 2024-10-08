import express from 'express';
import cookieParser from 'cookie-parser';
import { router as userRouter }  from './controller/user.controller.js';
import { router as chatRouter }  from './controller/chat.controller.js';
import { router as authRouter }  from './controller/auth.controller.js';
import { listAllUsers } from './services/user.service.js'
import { listAllMessages } from './services/chat.service.js'
import { verifyApiKey } from './middleware/auth.middleware.js'

const app = express()
const port = 3300

app.use(express.json())
app.use(cookieParser())

app.set("view engine", "ejs")
app.use("/user", userRouter)
app.use("/chat", verifyApiKey, chatRouter)
app.use("/auth", authRouter)

app.get("/", async (req, res) => {
    const messagesData = await listAllMessages();
    const userData = await listAllUsers();

    res.render("index", {
        messages: messagesData,
        users: userData
    })
})

app.get("/login", async (req, res) => {
    res.render("login")
})

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`)
})