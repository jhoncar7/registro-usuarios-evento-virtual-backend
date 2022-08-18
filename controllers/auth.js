const { response, request } = require('express');
const User = require('../models/user');
const { sendCode } = require('../helpers/send-code');

const generateCode = async (req = request, res = response) => {
    try {

        const { email, title, name, lastName } = req.body;

        if (title === 'REGISTRO') {
            const user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'El email ya existe' });
            }
        }

        const codeVerification = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

        sendCode(email, codeVerification, title, name, lastName);
        return res.json({
            codeVerification
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    generateCode
};