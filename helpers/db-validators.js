const User = require('../models/user')
const Country = require('../models/country')

/* Se lanza un error si existe el email en la base de datos, para evitar duplicados */
const emailExist = async (email = '') => {
    const existEmail = await User.findOne({ email });
    if (existEmail)
        throw new Error(`El email ${email} ya existe`);
}

/* si el ID enviado por parametro no existe y lanzo un error */
const idUserExist = async (id) => {
    const existIdUser = await User.findById(id);
    if (!existIdUser)
        throw new Error(`El id ${id} no existe`);
}

const countryExist = async (name = '') => {
    name = name.toLowerCase().trim();
    const exist = await Country.findOne({ name });
    if (exist)
        throw new Error(`El pais ${name} ya existe dentro del registro`);
}

const abbrExist = async (abbr = '') => {
    abbr = abbr.toLowerCase().trim();
    const exist = await Country.findOne({ abbr });
    if (exist)
        throw new Error(`La abreviatura ${abbr} ya existe dentro del registro`);
}

const codeExist = async (code = '') => {
    code = code.toLowerCase().trim();
    const exist = await Country.findOne({ code });
    if (exist)
        throw new Error(`La abreviatura ${code} ya existe dentro del registro`);
}

module.exports = {
    emailExist,
    idUserExist,
    countryExist,
    abbrExist,
    codeExist
};