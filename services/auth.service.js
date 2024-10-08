import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client';
import { encrypt } from "./user.service.js";

const prisma = new PrismaClient();

export async function genAPIKey(user_id) {
    const uuid = crypto.randomUUID();
    const hashedUuid = await encrypt(uuid)

    const data = await prisma.apikey.findUnique({
        where: {
            user_id: user_id
        }
    })

    if (data) {
        await prisma.apikey.update({
            where: {
                user_id: user_id
            },
            data: {
                api_key: hashedUuid
            }
        })
    } else {
        await prisma.apikey.create({
            data: {
                user_id: user_id,
                api_key: hashedUuid
            }
        })
    }

    return uuid;
}

export async function checkApiKey(user_id, api_key) {
    const data = await prisma.apikey.findUnique({
        where: {
            user_id: user_id
        }
    }).catch((err) => {
        console.error(err)
    })

    // bcrypt.compare(api_key, data.api_key, (err, res)=> {
    //     console.log(res)
    //     console.log(err)
    // })

    return await bcrypt.compare(api_key, data.api_key)
}
