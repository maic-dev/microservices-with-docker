import { Request, Response } from "express";
import { User } from "../entities/user.entity";

export const addUser = async (req: Request, res: Response) => {
    try {
        const data = req.body

        const user = new User();
        user.name = data.name;
        await user.save()

        //throw new Error(`User ${data.name} already exists`)

        return res.json({ message: 'User added' });
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ id: req.params.id });

        if (!user) return res.status(404).json({ message: 'User not found' });

        return res.json(user);
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const user = await User.findOneBy({ id: req.params.id });

        if (!user) return res.status(404).json({ message: 'User not found' });

        await User.update({ id: id }, req.body)

        return res.json({ msg: 'User updated successfully' })
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const user = await User.findOneBy({ id: req.params.id });

        if (!user) return res.status(404).json({ message: 'User not found' });

        await User.delete({ id: id })

        return res.json({ msg: 'User deleted successfully' })
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
}