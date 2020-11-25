document.getElementById("reseteoclave").addEventListener("submit", function (event) {
    ValidarFormulario();
    event.preventDefault();
});

function ValidarFormulario() {
    var x = document.forms["formResetClave"];
    if (x["Clave"].value == "" || x["Clave"].value == null) {
        alert("rellene apropiadamente el formulario");
    }
}