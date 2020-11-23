var wsURL = "./receiver.php";

var btna = document.getElementById("visualizadorVideo");

btna.onclick = function () {
    // CambiarTitulo("Soy el titulo");
    BuscaVideo();
}

function CambiarTitulo(titulo) {
    let el = document.getElementById("modalVideo-Titulo");
    el.innerHTML = titulo;
}

function CambiarDescripcion(Desc) {
    let el = document.getElementById("modalVideo-Descripcion");
    el.innerHTML = Desc;
}

function CambiarVideoAframe(urlvideo) {
    let el = document.getElementById("modalVideo-Iframe");
    el.setAttribute('src', urlvideo);
}
/*
< iframe width = "560"
height = "315"
src = "https://www.youtube.com/embed/cmASKLvCJ2I"
frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen > < /iframe>
*/

function InsertarVideoData(titulo, descripcion, url) {
    let el = document.getElementById("modalVideo");
    CambiarTitulo(titulo);
    CambiarDescripcion(descripcion);
    CambiarVideoAframe(url);
    el.style.display = "block";
}

function BuscaVideo() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", wsURL, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            let responseJSON = JSON.parse(this.responseText);
            let response = responseJSON.data;
            console.log(response);
            InsertarVideoData(response.Titulo, response.Desc, response.url);
            //CambiarTitulo(this.responseText);
        }
    }
}