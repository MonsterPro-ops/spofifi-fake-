
let currentAudio = null;
let currentPlayIcon = null;
let currentPauseIcon = null;

function toggleMusic(audioId, playIconId, pauseIconId) {
    const audio = document.getElementById(audioId);
    const playIcon = document.getElementById(playIconId);
    const pauseIcon = document.getElementById(pauseIconId);

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        if (currentPlayIcon && currentPauseIcon) {
            currentPlayIcon.style.display = "block";
            currentPauseIcon.style.display = "none";
        }
    }

    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        currentAudio = audio;
        currentPlayIcon = playIcon;
        currentPauseIcon = pauseIcon;
    } else {
        audio.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        currentAudio = null;
        currentPlayIcon = null;
        currentPauseIcon = null;
    }
}
function timKiemNhac(keyWord){
    let input = keyWord.toLowerCase()
    let ds = document.querySelector(".popularArtists") 
    let bh = ds.getElementsByClassName("artist-card") 

    for(let i = 0;i < bh.length; i++){
        let nameSong = bh[i].querySelector(".artist-name").textContent || ""
        if (nameSong.toLowerCase().indexOf(input) > -1 ){
            bh[i].style.display = ""
        }
        else{
            bh[i].style.display = "none"
        }
    }
}