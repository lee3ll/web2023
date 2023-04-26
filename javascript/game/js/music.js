const allMusic = [
    {
        name : "1.Dangerously",
        artist : "Charlie Puth",
        img : "music_view01.png",
        audio : "music_audio01"
    }, {
        name : "2.낭만교향곡",
        artist : "빅나티",
        img : "music_view02",
        audio : "music_audio02"
    }, {
        name : "3.첫사랑",
        artist : "백아",
        img : "music_view03",
        audio : "music_audio03"
    }, {
        name : "4.INDUSTRY BABY",
        artist : "Lil Nas X Jack Harlow",
        img : "music_view04",
        audio : "music_audio04"
    }, {
        name : "5.빛이 나는 너에게 ",
        artist : "던(DAWN)",
        img : "music_view05",
        audio : "music_audio05"
    }, {
        name : "6.인사",
        artist : "범진",
        img : "music_view06",
        audio : "music_audio06"
    }, {
        name : "7.Rainy day",
        artist : "PATEKO 파테코(Feat.ASH ISLAND Skinny Brown) ",
        img : "music_view07",
        audio : "music_audio07"
    }, {
        name : "8.연애의 발명",
        artist : "빅나티",
        img : "music_view08",
        audio : "music_audio08"
    }, {
        name : "9.Tired",
        artist : "Alan Walker ft Gavin James",
        img : "music_view01",
        audio : "music_audio09"
    }, {
        name : "10.INVU",
        artist : "태연",
        img : "music_view10",
        audio : "music_audio10"
    }
];
const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main_audio");
const musicPlay= musicWrap.querySelector("#control-play");
// const musicPlay = 

let musicIndex = 1; //현재 음악 인덱스


// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;  //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist; //아티스트 이름
    musicView.src = `img/${allMusic[num-1].img}`;  //뮤직이미지
    musicView.alt = allMusic[num-1].name;                        //뮤직이미지 alt
    musicAudio.src =`audio/${allMusic[num-1].audio}.mp3`           //뮤직파일
}
window.addEventListener("load",() => {
    loadMusic(musicIndex);
    musicAudio.play();
})

//플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    
});

// //음악 재생
// const loadMusic = (num) => {
//     musicName.innerText = allmusic[num-1].name;             //뮤직 이름
//     musicArtist.innerText = allmusic[num-1].artist;         //뮤직 이름
//     musicView.src = `img/${allmusic[num-1].img}.png`;       //뮤직 이미지
//     musicView.alt = allmusic[num-1].name;                   //뮤직이미지 alt
//     musicAudio.src = `audio/${allmusic[num-1].audio}.mp3`   //뮤직파일
// }

// window.addEventListener("load", ()=>{
//     loadMusic(musicIndex);

//     musicAudio.play();
// });