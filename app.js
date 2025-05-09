const express = require("express")
const path = require('path')
const ejs = require('ejs')
const app = express()
const port = 3000

const main_routes = require("./controller/main_router")

app.set('port', process.env.PORT || port)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '')));

/* rutas principales */
app.use("/main", main_routes)
/* rutas de tarjetas */

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`)
})