import { Router } from "express";

import category from "./category.routes.js";
import product from "./product.routes.js";

const router = Router()

router.use('/api', category, product)
router.use('*', (req, res) => {
    return res.status(404).json({ message: 'Resource not found' });
})

export default router