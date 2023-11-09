const videiTag = document.querySelector('video')
const playBtn = document.querySelector('#play')
const stopBtn = document.querySelector('#stop')
console.log(videiTag);



playBtn.addEventListener('click', function(){
    videiTag.pause();
    stopBtn.style.display = "block" 
    playBtn.style.display = "none" 
})

stopBtn.addEventListener('click', function(){
    videiTag.play();
    stopBtn.style.display = "none" 
    playBtn.style.display = "block" 
})