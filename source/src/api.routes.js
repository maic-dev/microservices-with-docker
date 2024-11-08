import { Router } from 'express';
import { sendVerificationEmail } from './controller.js';
import { authenticateToken } from './middleware.js';

import jwt from 'jsonwebtoken';

const route = Router();

const users = [];

route.post('/login/google', (req, res) => {
    const { email } = req.body;

    let user = users.find(u => u.username === email);

    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    if (user) {
        return res.status(200).json({
            token: verificationToken, message: 'Usuario ya registrado.'
        });
    } else {
        sendVerificationEmail(email, verificationToken);
        res.status(200).json({ token: verificationToken });
    }
});

route.get('/verify', (req, res) => {
    const { token } = req.query;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

        if (err) return res.status(403).send('Token inválido o expirado');

        const email = decoded.email;
        let user = users.find(u => u.username === email);

        if (!user) users.push({ username: email });

        res.send('Correo verificado correctamente');
    });
});

route.get('/main', authenticateToken, (req, res) => {
    res.json({ email: req.user.email, message: 'Bienvenido a la ruta principal' });
});

route.get('/users', (req, res) => {
    const registeredUsers = users.map(user => user.username);
    res.json(registeredUsers);
});

export default route