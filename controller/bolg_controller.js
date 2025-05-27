const express = require("express")
const blog = express.Router()

blog.get("/casaCultura", async (req, res) => {
    res.render('blog/casaDeLaCultura.ejs')
})
blog.get("/parqueJGR", async (req, res) => {
    res.render('blog/parqueJuanGRoscio.ejs')
})

module.exports = blog