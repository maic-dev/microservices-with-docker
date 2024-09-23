import { Router } from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user";

const router: Router = Router()

router.post('/user', addUser)
router.get('/user', getUsers)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router