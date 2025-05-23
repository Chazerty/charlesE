// Précharger le son
let son;
        window.onload = function() {
        son = new Audio('../audio/son_abeille.mp3');
        };

function abeille() {
    if (son) {
    son.currentTime = 0;
    son.play();
}};

var audio_troll = document.getElementById('video-troll');

function play_troll() {
    if (audio_troll.paused) {
        audio_troll.currentTime = 0;
        audio_troll.play();
    }
}

function pause_troll() {
    if (audio_troll.played) {
        audio_troll.pause();
    }
}

function btn_ytb()  {  
    document.getElementById('video_footbar').showModal();
    play_troll()
}