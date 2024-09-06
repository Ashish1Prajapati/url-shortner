const express = require("express");
const { generateShortUrl, redirectToUrl, getAnalytics } = require("../controllers/url");
const router = express.Router();
router.post("/",generateShortUrl);
router.get("/:id",redirectToUrl);
router.get("/analytics/:id",getAnalytics);
module.exports=router