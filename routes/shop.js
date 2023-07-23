const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", {
    prods: products,
    docTitle: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  }); //loooking for pug template
});

module.exports = router;
