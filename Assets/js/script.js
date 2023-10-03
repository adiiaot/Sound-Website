var mySong = document.getElementById("mySong");

var icon = document.getElementById("icon");

icon.onclick = function () {
   if (mySong.paused) {
    mySong.play();
    icon.src = "/Assets/img/pause.png" ;
   } else {
    mySong.pause();
    icon.src = "/Assets/img/play.png";
   }
}

