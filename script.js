console.log("Welcome to Geet");

let songIndex=0;

let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById("masterPlay"); 
let myProgressBar=document.getElementById("myProgressBar"); 
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName("songItems"));


let songs =[
        {songName: "Drishyam Title Track",filePath: "songs/1.mp3",coverPath: "1.jpg"},
        {songName: "Sahi Galat-Drishyam ",filePath: "songs/2.mp3",coverPath: "2.jpg"},
        {songName: "Saath Hum-Drishyam ",filePath: "songs/3.mp3",coverPath: "3.jpg"},
        {songName: "Despacito-Luis Fonsi",filePath: "songs/4.mp3",coverPath: "4.jpg"},
        {songName: "Dil De Diya-Thank God ",filePath: "songs/5.mp3",coverPath: "5.jpg"},
        {songName: "Deva Deva-Brahmasastra ",filePath: "songs/6.mp3",coverPath: "6.jpg"},
        {songName: "Keasariya-Bramhasastra ",filePath: "songs/7.mp3",coverPath: "7.jpg"},
        {songName: "Namo-Namo-Kedarnath",filePath: "songs/8.mp3",coverPath: "8.jpg"},
        {songName: "Dil Diya Galan-Tiger Zinda Hai",filePath: "songs/9.mp3",coverPath: "9.jpg"},
        {songName: "Vignaharta-Antim The Final truth",filePath: "songs/10.mp3",coverPath: "10.jpg"}



]

songItems.forEach((element,i) => {
    console.log(element,1);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
});


//audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})


//Listen to Events

audioElement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  //Update seekbar
 progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
 console.log(progress);
 myProgressBar.value=progress;

})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            makeAllPlays();
            songIndex= parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        audioElement.src="songs/"+(songIndex+1)+".mp3";
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex=songIndex+1;
    }

    audioElement.src="songs/"+(songIndex+1)+".mp3";
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex=songIndex-1;
    }

    audioElement.src="songs/"+(songIndex+1)+".mp3";
    masterSongName.innerText=songs[songIndex].songName;
    
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})

