const { Schema, model } = require('mongoose');

const CountryShema = Schema({

    abbr: {
        type: String,
        required: [true, 'La abreviatura del pais es obligatorio'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'El nombre del pais es obligatorio'],
        unique: true
    },
    code: {
        type: String,
        required: [true, 'El codigo pais es obligatorio']
    },
    cant_phone: {
        type: Number,
        required: [true, 'La cantidad de cifras numericas del telefono es obligatorio']
    },
    example: {
        type: String,
        required: [true, 'El ejemplo de un numero del telefono es obligatorio']
    },
});

// enviar el objeto parcial, con los campos que unicamente quiero mostrar
CountryShema.methods.toJSON = function () {
    const { __v, _id, ...country } = this.toObject();
    country.uid = _id;
    return country;
}


module.exports = model('Country', CountryShema);
//Se le Pone Usuario moongose le agrega la 's' y lo crea en la base de datos