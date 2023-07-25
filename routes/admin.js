const path = require("path");

const express = require("express");

const productControl = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productControl.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productControl.postAddProduct);

module.exports = router;
