const allMusic = [
    {
        name : "1.Dangerously",
        artist : "Charlie Puth",
        img : "music_view01.png",
        audio : "music_audio01"
    }, {
        name : "2.낭만교향곡",
        artist : "빅나티",
        img : "music_view02.png",
        audio : "music_audio02"
    }, {
        name : "3.첫사랑",
        artist : "백아",
        img : "music_view03.png",
        audio : "music_audio03"
    }, {
        name : "4.INDUSTRY BABY",
        artist : "Lil Nas X Jack Harlow",
        img : "music_view04.png",
        audio : "music_audio04"
    }, {
        name : "5.빛이 나는 너에게 ",
        artist : "던(DAWN)",
        img : "music_view05.png",
        audio : "music_audio05"
    }, {
        name : "6.인사",
        artist : "범진",
        img : "music_view06.png",
        audio : "music_audio06"
    }, {
        name : "7.Rainy day",
        artist : "PATEKO 파테코(Feat.ASH ISLAND Skinny Brown) ",
        img : "music_view07.png",
        audio : "music_audio07"
    }, {
        name : "8.연애의 발명",
        artist : "빅나티",
        img : "music_view08.png",
        audio : "music_audio08"
    }, {
        name : "9.Tired",
        artist : "Alan Walker ft Gavin James",
        img : "music_view01.png",
        audio : "music_audio09"
    }, {
        name : "10.INVU",
        artist : "태연",
        img : "music_view10.png",
        audio : "music_audio10"
    }
];
const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main_audio");
const musicPlay= musicWrap.querySelector("#control-play");
const musicPrevBtn=musicWrap.querySelector("#control-prev");
const musicNextBtn=musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar")
const musicProgressCurrent = musicWrap.querySelector(".music__contents .timer .current")
const musicProgressDuration = musicWrap.querySelector(".music__contents .timer .duration")
// const musicPlay = 

let musicIndex = 10; //현재 음악 인덱스


// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;  //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist; //아티스트 이름
    musicView.src = `img/${allMusic[num-1].img}`;  //뮤직이미지
    musicView.alt = allMusic[num-1].name;                        //뮤직이미지 alt
    musicAudio.src =`audio/${allMusic[num-1].audio}.mp3`           //뮤직파일
}
// window.addEventListener("load",() => {
//     loadMusic(musicIndex);
//     musicAudio.play();
// })

//재생
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
}

//정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title","재생");
    musicPlay.setAttribute("class","play");
    musicAudio.pause();
}

//이전 곡 듣기
const prevMusic = () => {
    // musicIndex--;
    musicIndex <= 1 ? musicIndex = 9 : musicIndex--;

    // if(musicIndex<=1){
    //     musicIndex = 9;
    // }else{
    //     musicIndex--;
    // }

    loadMusic(musicIndex);
    playMusic();
}

//다음 곡 듣기
const nextMusic = () => {
    //1 2 3 4 5 6 7 8 9 1 2 3 4 5 6..
    // musicIndex++;
    // if(musicIndex == 9) musicIndex == 1;
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;

    loadMusic(musicIndex);
    playMusic();
}
//뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {
    console.log(e)
    const currentTime = e.target.currentTime;   //현재 재생되는 시간
    const duration = e.target.duration;         //오디오의 총 길이
    let progressWidth = (currentTime/duration) * 100;   //전체길이에서 현재 진행되는 시간을 백분위단위로 나누면 현재진행되는 길이를 알수 있음

    console.log(progressWidth)

    musicProgressBar.style.width = `${progressWidth}%`;

    //전체 시간
    musicAudio.addEventListener("loadeddata", ()=> {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    });

    //진행 시간
    let currentMin = Math.floor(currentTime /60);
    let currentSec = Math.floor(currentTime %60);  
    if(currentSec < 10) currentSec = `0${currentSec}`;  
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
});

//진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth;  //진행바 전체 길이
    let clickOffsetX = e.offsetX;                   //진행바를 기준으로 측정되는 X값 좌표
    let songDuration = musicAudio.duration;         //오디오 전체 길이
                                                    //백분위로 나눈 숫자에 다시 전체 길이를 곱해 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickOffsetX /progressWidth) * songDuration;
    console.log(songDuration)
});

//플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");   //음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();
    // playMusic();
});

//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});

//다음곡 버튼 클릭
musicNextBtn.addEventListener("click", () => { 
    nextMusic();
});

// //음악 재생
// const loadMusic = (num) => {
//     musicName.innerText = allmusic[num-1].name;             //뮤직 이름
//     musicArtist.innerText = allmusic[num-1].artist;         //뮤직 이름
//     musicView.src = `img/${allmusic[num-1].img}.png`;       //뮤직 이미지
//     musicView.alt = allmusic[num-1].name;                   //뮤직이미지 alt
//     musicAudio.src = `audio/${allmusic[num-1].audio}.mp3`   //뮤직파일
// }

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    console.log(musicIndex);
});