import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const product = Router()
const prisma = new PrismaClient

product.get('/product', async (req, res) => {
    try {
        const data = await prisma.product.findMany()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})

product.post('/product', async (req, res) => {
    try {
        await prisma.product.create({ data: req.body })
        return res.json({ msg: 'Product created successfully' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})

product.get('/product/:id', async (req, res) => {
    try {
        const data = await prisma.product.findFirst({
            where: { id: parseInt(req.params.id) },
            include: { category: true }
        })

        if (!data) return res.status(404).json({ msg: 'Product not found' })

        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})

product.put('/product/:id', async (req, res) => {
    try {
        await prisma.product.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        })

        return res.status(200).json({ msg: 'Product updated successfully' })

    } catch (error) {
        return res.status(404).json({ msg: 'Product not found' })
    }
})

product.delete('/product/:id', async (req, res) => {
    try {
        await prisma.product.findFirst({ where: { id: parseInt(req.params.id) } })

        return res.status(200).json({ msg: 'Product deleted successfully' })

    } catch (error) {
        return res.status(404).json({ msg: 'Product not found' })
    }
})

export default product