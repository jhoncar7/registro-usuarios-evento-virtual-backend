const { Schema, model } = require('mongoose');

const UserShema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    lastName: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true //que no existan mas correos con el mismo nombre
    },
    country: {
        type: String,
        required: [true, 'El pais es obligatorio'],
    },
    phone: {
        type: String,
        required: [true, 'El telefono es obligatorio'],
    },
    job: {
        type: String,
        required: [true, 'El puesto de trabajo es obligatorio'],
    },
    status: {
        type: Boolean,
        default: true
    },
    dateCreation: {
        type: Date,
        default: Date.parse(new Date())
    },
    dateDelete: {
        type: Date,
        default: null
    },
});

// enviar el objeto parcial, con los campos que unicamente quiero mostrar
UserShema.methods.toJSON = function () {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}


module.exports = model('User', UserShema);
//Se le Pone Usuario moongose le agrega la 's' y lo crea en la base de datos