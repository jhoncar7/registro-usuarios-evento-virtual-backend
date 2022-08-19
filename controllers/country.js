const { response, request } = require('express')
const Country = require('../models/country');

const countriesGet = async (req = request, res = response) => {

    try {
        const countries = await Country.find();

        return res.json({
            total: countries.length,
            countries
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

const countryPost = async (req = request, res = response) => {

    try {

        let { abbr, name, code, cant_phone, example } = req.body;
        abbr = abbr.toLowerCase().trim();
        name = name.toLowerCase().trim();

        const country = new Country({ abbr, name, code, cant_phone, example });

        await country.save();

        return res.json({ country });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


module.exports = {
    countriesGet,
    countryPost,
}