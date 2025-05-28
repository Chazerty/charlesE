// Précharger le son
let son_abeille;
let kaaris;
let kaarism;
let jaxomy;
window.onload = function() {
        son_abeille = new Audio('../audio/son_abeille.mp3');
        kaaris = new Audio('../audio/Kaaris - Zoo.mp3');
        kaarism = new Audio('../audio/Kaarism - Goulag.mp3');
        jaxomy = new Audio('../audio/Jaxomy  – Pedro.mp3');
        };

function abeille() {
    if (son_abeille) {
    son_abeille.currentTime = 0;
    son_abeille.play();
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

function play_kaarism() {
    if (kaarism) {
        if (kaaris.played) {
            kaaris.pause();
        }
        if (jaxomy.played) {
            jaxomy.pause();
        };   
        if (kaarism.paused) {
            kaarism.play();
        }
        else {
            kaarism.pause();
    }};
}

function play_kaaris() {
    if (kaaris) {
        if (kaarism.played) {
            kaarism.pause();
        };
        if (jaxomy.played) {
            jaxomy.pause();
        };
        if (kaaris.paused) {
            kaaris.play();
        }
        else {
            kaaris.pause();
    }};
}

function play_jaxomy() {
    if (jaxomy) {
        if (kaaris.played) {
            kaaris.pause();
        };
        if (kaarism.played) {
            kaarism.pause();
        };
        if (jaxomy.paused) {
            jaxomy.play();
        }
        else {
            jaxomy.pause();
        }
}};

function reset_kaaris() {
    if (kaaris) {
        kaaris.currentTime = 0;
        kaaris.pause();
    }
}

function reset_kaarism() {
    if (kaarism) {
        kaarism.currentTime = 0;
        kaarism.pause();
    }
}

function reset_jaxomy() {
    if (jaxomy) {
        jaxomy.currentTime = 0;
        jaxomy.pause();
    }
}

if(jaxomy) {
    jaxomy.addEventListener('ended', function() {
        reset_jaxomy();
    });
}

if(kaarism) {
    kaarism.addEventListener('ended', function() {
        reset_kaarism();
    });
}

if(kaaris) {
    kaaris.addEventListener('ended', function() {
        reset_kaaris();
    });
}