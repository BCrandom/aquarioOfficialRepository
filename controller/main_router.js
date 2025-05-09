const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    res.render('index.ejs')
})

router.get("/About", (req, res) => {
    res.render('about/about.ejs')
})

module.exports = router