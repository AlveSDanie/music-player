const playPause = window.document.getElementById("play-pause");
const returN = window.document.getElementById("return-music");
const skip = window.document.getElementById("skip-music");
let musicName = window.document.getElementById("music-name");
let currentMusic = window.document.getElementById("current-music");
let nextMusic = window.document.getElementById("current-music");
let indexMusic = 0;
let isItPlaying = 0;

playPause.addEventListener("click", playPauseMusic);
currentMusic.addEventListener("click", playPauseMusic);

returN.addEventListener("click", returnMusic);
skip.addEventListener("click", skipMusic);

nextMusic.addEventListener("ended", playNextMusic);

function playPauseMusic() {
    if (isItPlaying === 0) {
        playPause.classList.remove("bi-play-circle-fill");
        playPause.classList.add("bi-pause-circle-fill");
        currentMusic.play();
        isItPlaying = 1;
    } else if (isItPlaying === 1) {
        playPause.classList.remove("bi-pause-circle-fill");
        playPause.classList.add("bi-play-circle-fill");
        currentMusic.pause();
        isItPlaying = 0;
    }
}

function playNextMusic() {
    if (indexMusic === 0) {
        musicName.innerHTML = "Sapato Velho";
        currentMusic.src = "/musics/Sapato Velho-Roupa Nova.mp3";
        currentMusic.play();
        indexMusic++;
    } else if (indexMusic === 1) {
        musicName.innerHTML = "Anjo";
        currentMusic.src = "/musics/Anjo-Roupa Nova.mp3";
        currentMusic.play();
        indexMusic--;
    }
}

function returnMusic() {
    musicName.innerHTML = "Anjo";
    currentMusic.src = "/musics/Anjo-Roupa Nova.mp3";
    currentMusic.play();
}

function skipMusic() {
    musicName.innerHTML = "Sapato Velho";
    currentMusic.src = "/musics/Sapato Velho-Roupa Nova.mp3";
    currentMusic.play();
}