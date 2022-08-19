const express = require('express')
var cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/user'
        this.countryPath = '/api/country'

        //Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middleware();
        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middleware() {
        //CORS
        this.app.use(cors());
        // lectura y parseo del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
        this.app.use(this.countryPath, require('../routes/country'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port)
        })
    }
}

module.exports = Server;