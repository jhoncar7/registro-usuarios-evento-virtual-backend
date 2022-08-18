const User = require('../models/user')

/* Se lanza un error si existe el email en la base de datos, para evitar duplicados */
const emailExist = async (email = '') => {
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        throw new Error(`El email ${email} ya existe`);
    }
}

/* si el ID enviado por parametro no existe y lanzo un error */
const idUserExist = async (id) => {
    const existIdUser = await User.findById(id);
    if (!existIdUser) {
        throw new Error(`El id ${id} no existe`);
    }
}

module.exports = {
    emailExist,
    idUserExist
};