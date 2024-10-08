import { checkApiKey } from "../services/auth.service.js"

export async function verifyApiKey(req, res, next) {
    // const apiKey = req.header('Authorization')
    const apiKey = req.cookies.apiKey

    console.log(apiKey)

    const user_id = Number(req.query.id)

    if(!apiKey || !user_id) return res.status(401).json({ message: "Access Denied" })
    
    const ret = await checkApiKey(user_id, apiKey);

    if(!ret) return res.status(401).json({ message: "Access Denied" })

    next()
}
