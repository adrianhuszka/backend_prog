import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listAllMessages() {
    const data = await prisma.chat.findMany({
        include: {
            sender: true,
            to: true
        }
    });

    return data;
}

export async function addMessage(content, sender_id, to_id) {
    await prisma.chat.create({
        data: {
            content: content,
            sender_id: sender_id,
            to_id: to_id,
            created_at: new Date()
        }
    })
}

export async function updateMessage(id, content) {
    await prisma.chat.update({
        where: {
            id: id
        },
        data: {
            content: content
        }
    })
}

export async function deleteMessage(id) {
    await prisma.chat.delete({
        where: {
            id: id
        }
    })
}