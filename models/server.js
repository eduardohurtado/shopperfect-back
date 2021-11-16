const express = require("express");
const morgan = require("morgan");
const CORS = require("cors");

class Server {
    constructor() {
        // Config
        this.app = express();
        this.productsPath = "/api/products";
        this.salesPath = "/api/sales";

        //Server Settings
        this.app.set("port", process.env.PORT || 8080);

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

        // Start
        this.listen();

        // Connect MongoDB
        this.connectDB();
    }

    middlewares() {
        // CORS
        this.app.use(CORS());

        // Read and Parse
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use(express.urlencoded({ extended: false }));

        // Static Files
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.productsPath, require("../routes/products.routes"));
    }

    listen() {
        this.app.listen(this.app.get("port"), () => {
            console.warn(`Server on port: ${this.app.get("port")}`);
        });
    }

    connectDB() {
        require("../database");
    }
}

module.exports = Server;
