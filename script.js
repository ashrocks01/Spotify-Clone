console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('Taylor Swift -  gold rush.mp3','Iktara.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Gold Rush",filePath: "D:\Aneesh\Html\My Projects\Spotify Clone/Taylor Swift -  gold rush.mp3",coverPath: "D:\Aneesh\Html\My Projects\Spotify Clone"},
   // {songName:"Iktara",filePath: "D:\Aneesh\Html\My Projects\Spotify Clone/Iktara.mp3",coverPath: "D:\Aneesh\Html\My Projects\Spotify Clone/iktara.jfif"}

]

songItems.forEach((element,i)=>{
    console.log(element,i);
    //element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   // element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Event
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
   // e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `D:\Aneesh\Html\My Projects\Spotify Clone/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})