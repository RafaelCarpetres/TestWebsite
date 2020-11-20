var btna = document.getElementById("visualizadorVideo");

btna.onclick = function () {
    CambiarTitulo("Soy el titulo");
}

function CambiarTitulo(titulo) {
    var el = document.getElementById("tituloVideo");
    el.innerHTML = titulo;
}