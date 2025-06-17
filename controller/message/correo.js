document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("mensajeToggleBtn");
    const panel = document.getElementById("mensajePanel");

    btn.addEventListener("click", () => {
        panel.classList.toggle("visible");
    });

    fetch("/api/mensajes")
        .then(res => {
            if (!res.ok) throw new Error("Error al cargar mensajes");
            return res.json();
        })
        .then(data => {
            const contenedor = document.getElementById("mensajesContenido");
            contenedor.innerHTML = "";
            data.mensajes.forEach(msg => {
                const div = document.createElement("div");
                div.className = "mensaje";
                div.innerHTML = `
                    <h4>${msg.titulo}</h4>
                    <p>${msg.cuerpo}</p>
                    <small>${msg.fecha}</small>
                `;
                contenedor.appendChild(div);
            });
        })
        .catch(error => console.error("Error al cargar los mensajes:", error));
});