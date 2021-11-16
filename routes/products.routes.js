const { Router } = require("express");

// Controllers
const {
    products_GET,
    products_POST,
    products_PUT,
    products_DELETE
} = require("../controllers/products.controller");

// Router
const router = Router();

// Routes
router.get("/", products_GET);
router.post("/", products_POST);
router.put("/:id", products_PUT);
router.delete("/:id", products_DELETE);

module.exports = router;
