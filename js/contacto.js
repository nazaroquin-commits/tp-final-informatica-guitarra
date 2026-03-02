document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completá todos los campos.");
    event.preventDefault();
    return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
    alert("Ingresá un correo electrónico válido.");
    event.preventDefault();
    return;
    }
    });
});
