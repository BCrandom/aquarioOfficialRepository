const express = require("express")
const cards = express.Router()

router.get("/allCards", async (req, res) => {
    res.render('index.ejs')
})



module.exports = cards