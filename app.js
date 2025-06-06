const express = require("express")
const path = require('path')
const ejs = require('ejs')
const app = express()
const port = 3000

const main_routes = require("./controller/main_router")
const blog_routes = require("./controller/bolg_controller")

app.set('port', process.env.PORT || port)
app.use(express.static(path.join(__dirname, 'views/public')));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '')));

/* rutas principales */
app.use(main_routes)
/* rutas de tarjetas */
app.use("/blog", blog_routes)

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`)
})