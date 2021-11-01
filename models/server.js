const express = require("express");
const CORS = require("cors");

class Server {
    constructor() {
        // Config
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

        // Start
        this.listen();
    }

    middlewares() {
        // CORS
        this.app.use(CORS());

        // Read and Parse
        this.app.use(express.json());

        // Static Files
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/usuarios.routes"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.warn("Servidor conectado...");
        });
    }
}

module.exports = Server;
