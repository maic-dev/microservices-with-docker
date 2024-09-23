import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const category = Router()
const prisma = new PrismaClient

category.get('/category', async (req, res) => {
    try {
        const data = await prisma.category.findMany()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})

export default category