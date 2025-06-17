const express = require("express")
const path = require('path')
const ejs = require('ejs')

const app = express()
const port = 3000

const main_routes = require("./controller/main_router")
const blog_routes = require("./controller/bolg_controller")
const sendEmail = require("./controller/mailer")

app.set('port', process.env.PORT || port)
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '')));

app.get("/api/mensajes", (req, res) => {
    res.sendFile(path.join(__dirname, "controller/message/mensajes.json"));
});

app.use(express.json());

app.post("/send-email", async (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).send("Correo no válido.");
    }

    try {
        await sendEmail(
            email, 
            "Bienvenido a Aquario", 
            "<div style='text-align:center;'><h1>¡Gracias por suscribirte!</h1><p>Nos alegra que quieras sumergirte con nosotros en las profundidades de nuestro acuario.</p><p>Pronto recibirás noticias y actualizaciones.</p><img src='https://images.vexels.com/media/users/3/189936/isolated/preview/6f257f5ef903ed32da100d550602914e-submarine-vector-simple.png' title='Simoncito' width='200'></div>"
        );
        res.status(200).send("Correo enviado correctamente.");
    } catch (error) {
        res.status(500).send("Error al enviar el correo.");
    }
});

/* rutas principales */
app.use(main_routes)
/* rutas de tarjetas */
app.use("/blog", blog_routes)

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`)
    console.log("Servidor corriendo en http://localhost:3000")
})