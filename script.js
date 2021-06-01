let video = document.getElementById("video1")

let btnplay = document.getElementById("play")

let maximizefull = document.getElementById("fullscreen");

maximizefull.addEventListener("click", fullscreen);

function retroceder() {
    video.currentTime -= 15;
}

function play() {
    video.play()
    btnplay.setAttribute("src", "./assets/imagens/pause.svg")
    btnplay.setAttribute("onclick", "pause()")
    
}


function pause(){
    video.pause()
    btnplay.setAttribute("src", "./assets/imagens/play.svg")
    btnplay.setAttribute("onclick", "play()")
}

function avancar() {
    video.currentTime += 15;

}

function volume1() {
    video.volume -= 0.1

}

function volume2() {
    video.volume += 0.1

}

function fullscreen() {
    video.requestFullscreen()
}

function normalScreen(){
    document.exitFullscreen();}
