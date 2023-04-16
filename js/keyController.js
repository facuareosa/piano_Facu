// KEY CONTROLLER

window.addEventListener("keydown", function(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const tile = document.querySelector(`div[data-key="${event.keyCode}"]`)
    
    if(!audio) return;

    if (tile.classList.contains("white__key")) {
        
        tile.classList.add("white__key-active");
      }else{
        
        tile.classList.add("black__key-active")}

    audio.currentTime = 0;
    audio.play()

    
});

window.addEventListener("keyup", function(event){
    const tile = document.querySelector(`div[data-key="${event.keyCode}"]`)

    if (tile.classList.contains("white__key-active") || tile.classList.contains("black__key-active")){
        
        tile.classList.remove("white__key-active");
        tile.classList.remove("black__key-active");
    }
})