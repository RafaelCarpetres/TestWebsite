//Obtenemos el modal
var modal = document.getElementById("myModal");

//Obtenemos el boton que abre el modal
var btn = document.getElementById("myBtn");

//Obtenemos el <span> elemento que cierra el modal
var span = document.getElementsByClassName("close")[0];

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'cmASKLvCJ2I',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


//Cuando el usuario hace click en el boton, abre el modal
btn.onclick = function () {
  //console.log("caca");
  MostrarModal(true);
};

span.onclick = function () {
  MostrarModal(false);
};

window.onclick = function (event) {
  if (event.target == modal) {
    MostrarModal(false);
  }
};

function MostrarModal(si = Boolean) {
  if (si) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
    stopVideo();
  }
}
