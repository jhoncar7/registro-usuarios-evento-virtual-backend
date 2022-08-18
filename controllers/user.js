const { response, request } = require('express')
const User = require('../models/user');

const usersGet = async (req = request, res = response) => {

    try {
        const { limit = 5, from = 0 } = req.query;
        const query = { status: true };

        const usersPromise = User.find(query).skip(Number(from)).limit(Number(limit));
        const totalPromise = User.countDocuments(query);

        const [total, users] = await Promise.all([totalPromise, usersPromise]);

        return res.json({
            total,
            users
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

const userPost = async (req = request, res = response) => {

    try {

        const { name, lastName, email, country, phone, job } = req.body;

        const user = new User({ name, lastName, email, country, phone, job });

        //Guardar en BD
        await user.save();

        return res.json({ user });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


module.exports = {
    usersGet,
    userPost,
}