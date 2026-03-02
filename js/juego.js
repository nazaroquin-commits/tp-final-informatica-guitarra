document.addEventListener("DOMContentLoaded", function () {

  const preguntas = [
    {
      nombre: "La menor",
      correcta: "Am",
      opciones: ["Am", "C", "Em"]
    },
    {
      nombre: "Sol Mayor",
      correcta: "G",
      opciones: ["D", "G", "A"]
    },
    {
      nombre: "Mi menor",
      correcta: "Em",
      opciones: ["E", "Em", "Am"]
    },
    {
      nombre: "Do Mayor",
      correcta: "C",
      opciones: ["C", "Dm", "F"]
    },
    {
      nombre: "Re Mayor",
      correcta: "D",
      opciones: ["D", "G", "A"]
    }
  ];

  let indiceActual = 0;
  let puntaje = 0;

  const preguntaElemento = document.getElementById("pregunta");
  const opcionesElemento = document.getElementById("opciones");
  const feedbackElemento = document.getElementById("feedback");
  const puntajeElemento = document.getElementById("puntaje");
  const botonReiniciar = document.getElementById("reiniciar");

  function mostrarPregunta() {

    feedbackElemento.textContent = "";
    opcionesElemento.innerHTML = "";

    if (indiceActual >= preguntas.length) {
      finalizarJuego();
      return;
    }

    const preguntaActual = preguntas[indiceActual];

    preguntaElemento.textContent =
      "¿Cuál es el cifrado americano de " + preguntaActual.nombre + "?";

    preguntaActual.opciones.forEach(function (opcion) {

      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.className = "btn btn-outline-dark";

      boton.addEventListener("click", function () {
        verificarRespuesta(opcion);
      });

      opcionesElemento.appendChild(boton);

    });

  }

  function verificarRespuesta(opcionSeleccionada) {

    const correcta = preguntas[indiceActual].correcta;

    if (opcionSeleccionada === correcta) {
      feedbackElemento.textContent = "¡Correcto!";
      puntaje++;
    } else {
      feedbackElemento.textContent =
        "Incorrecto. La respuesta correcta era " + correcta;
    }

    indiceActual++;

    setTimeout(mostrarPregunta, 1000);
  }

  function finalizarJuego() {

    preguntaElemento.textContent = "Juego finalizado";
    opcionesElemento.innerHTML = "";
    puntajeElemento.textContent =
      "Tu puntaje final es: " + puntaje + " / " + preguntas.length;

    botonReiniciar.classList.remove("d-none");
  }

  botonReiniciar.addEventListener("click", function () {
    indiceActual = 0;
    puntaje = 0;
    puntajeElemento.textContent = "";
    botonReiniciar.classList.add("d-none");
    mostrarPregunta();
  });

  mostrarPregunta();

});
