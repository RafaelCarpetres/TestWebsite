var wsURL = "./receiver.php";
var responseVideoData;
var btna = document.getElementById("visualizadorVideo");
var btnCerrarModal = document.getElementById("modalvideo_close");
btna.onclick = function () {
    // CambiarTitulo("Soy el titulo");
    BuscaVideo();
}

btnCerrarModal.onclick = function () {
    CerrarModalVideo();
}

window.onclick = function (event) {
    let modal = document.getElementById("modalVideo");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function CerrarModalVideo() {
    let el = document.getElementById("modalVideo").style.display = "none";
}

function AbrirModalVideo() {
    let el = document.getElementById("modalVideo").style.display = "block";
}

function CambiarTitulo(titulo) {
    let el = document.getElementById("modalVideo-Titulo");
    el.innerHTML = titulo;
}

function CambiarDescripcion(Desc) {
    let el = document.getElementById("modalVideo-Descripcion");
    el.innerHTML = Desc;
}

function CambiarVideoIframe(urlvideo) {
    let el = document.getElementById("modalVideo-Iframe");
    el.setAttribute('src', urlvideo);
}

function InsertarVideosIFrame(response) {
    let el = document.getElementsByClassName("modalVideo-Content-Video-Iframe");
    for (let i = 0; i < response.length; i++) {
        el[i].setAttribute('src', response[i].url)
    }
    AbrirModalVideo();
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
    CambiarVideoIframe(url);
    AbrirModalVideo();
}

function InsertarVideoData(ele, titulo, descripcion, url) {
    let el = ele;
    CambiarTitulo(titulo);
    CambiarDescripcion(descripcion);
    CambiarVideoIframe(url);
    AbrirModalVideo();
}

function BuscaVideo() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", wsURL, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            let responseJSON = JSON.parse(this.responseText);
            let response = responseJSON.data;
            responseVideoData = response;
            console.log(response);
            InsertarVideosIFrame(response);
            //InsertarVideoData(response.Titulo, response.Desc, response.url);
            //CambiarTitulo(this.responseText);
        }
    }
}

/* TRANSICIONESSSSSSSS */

var slider = $('#slider');
//botoncitos
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');
var moviendose = false;
//$('#slider section:last').insertBefore('#slider section:first');

slider.css('margin-left', '-' + 100 + '%')

function moverD() {
    if (!moviendose) {
        moviendose = true;
        var marginLeftValue = parseInt(slider.css('margin-left'), 10)
        //console.log(marginLeftValue + " antes");
        if (marginLeftValue == -1800) {
            marginLeftValue = 0;
        } else {
            marginLeftValue -= 600;
        }
        //console.log(marginLeftValue + " despues");
        slider.animate({
                marginLeft: marginLeftValue + 'px'
            },
            700,
            function () {
                moviendose = false;
            });
    }
}

function moverI() {
    if (!moviendose) {
        moviendose = true;
        var marginLeftValue = parseInt(slider.css('margin-left'), 10)
        //console.log(marginLeftValue + " antes");
        if (marginLeftValue == 0) {
            marginLeftValue = -1800;
        } else {
            marginLeftValue += 600;
        }
        //console.log(marginLeftValue + " despues");
        slider.animate({
                marginLeft: marginLeftValue + 'px'
            },
            700,
            function () {
                moviendose = false;
            });
    }
}

siguiente.on('click', function () {
    moverD();
});

anterior.on('click', function () {
    moverI();
});