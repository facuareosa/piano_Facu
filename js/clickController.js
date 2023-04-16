// CLICK CONTROLLER

window.addEventListener("click", function(event){
    const audio = document.querySelector(`audio[data-key="${event.target.dataset.key}"]`)
    
    if(!audio) return;

    audio.currentTime = 0;
    audio.play()
})

