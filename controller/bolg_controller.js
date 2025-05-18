const express = require("express")
const blog = express.Router()

blog.get("/casaCultura", async (req, res) => {
    res.render('blog/casaDeLaCultura.ejs')
})
blog.get("/parqueSimonB", async (req, res) => {
    res.render('blog/parqueSimonBolivar.ejs')
})

module.exports = blog