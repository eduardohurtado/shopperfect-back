const { Router } = require("express");

// Controllers
const {
    usuarios_GET,
    usuarios_POST,
    usuarios_PUT,
    usuarios_DELETE
} = require("../controllers/usuarios.controller");

// Router
const router = Router();

// Routes
router.get("/", usuarios_GET);
router.post("/", usuarios_POST);
router.put("/:id", usuarios_PUT);
router.delete("/:id", usuarios_DELETE);

module.exports = router;
