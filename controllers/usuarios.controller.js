const { request, response } = require("express");

const usuarios_GET = (req = request, res = response) => {
    const usuario = req.body;
    res.json({ msj: "Estoy en usuariosGET" });
};

const usuarios_POST = (req = request, res = response) => {
    res.json({
        msj: "Estoy en usuariosGET"
    });
};

const usuarios_PUT = (req = request, res = response) => {
    res.json({
        msj: "Estoy en usuariosGET"
    });
};

const usuarios_DELETE = (req = request, res = response) => {
    res.json({
        msj: "Estoy en usuariosGET"
    });
};

module.exports = { usuarios_GET, usuarios_POST, usuarios_PUT, usuarios_DELETE };
