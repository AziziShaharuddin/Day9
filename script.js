var song = document.getElementById("song");
var isPlaying = false;
var volume = 1;
// var i = [songList1, songList2, songList3, songList4, songList5];
// let x = i;
// var volume2 = volume;
var i = 0;
// const num = [songList1, songList2, songList3, songList4, songList5];

// var songPlaylistLibrary = {
//     songList1 : {
//         src: './audio/30sec.mp3',
//         img: 'url(./images/chicago.jpg)',
//         title: 'Hidup Seribu Tahun',
//         artist: 'Hamdan Madani',
//         album: 'Main hentam saje',
//         description: 'Lagu ini mengisahkan cubaan seorang remaja ingin bertukar bidang ke arah software development',
//     },
//     songList2 : {
//         src: './audio/bgmusic.mp3',
//         img: 'url(./images/newyork.jpg)',
//         title: 'Bad Day',
//         artist: 'Drake',
//         album: 'Hanya Aku Yang Tahu',
//         description: 'This song was made due to frustration of a man trying to code',
//     },
//     songList3 : {
//         src: './audio/bloop.mp3',
//         img: 'url(./images/ny.jpg)',
//         title: 'Lets gooo',
//         artist: 'Azizi',
//         album: 'On Tour',
//         description: 'The artist has decided to share his journey on becoming a software engineer',
//     },
//     songList4 : {
//         src: './audio/click.mp3',
//         img: 'url(./images/sanfran.jpg)',
//         title: 'Kau Ilhamku',
//         artist: 'Marza',
//         album: 'The love of My Life',
//         description: 'Who would have thought your crush would love you back? Thats basically the story of my life',
//     },
//     songList5 : {
//         src: './audio/littlebit.mp3',
//         img: 'url(./images/la.jpg)',
//         title: 'What on Earth',
//         artist: 'Lil Wayne',
//         album: 'Bad Thing',
//         description: 'Man, Im lost!',
//     }
// }

var songList1 = {
    src: './audio/30sec.mp3',
    img: 'url(./images/chicago.jpg)',
    title: 'Hidup Seribu Tahun',
    artist: 'Hamdan Madani',
    album: 'Main hentam saje',
    description: 'Lagu ini mengisahkan cubaan seorang remaja ingin bertukar bidang ke arah software development',
}
var songList2 = {
    src: './audio/bgmusic.mp3',
    img: 'url(./images/newyork.jpg)',
    title: 'Bad Day',
    artist: 'Drake',
    album: 'Hanya Aku Yang Tahu',
    description: 'This song was made due to frustration of a man trying to code',
}
var songList3 = {
    src: './audio/bloop.mp3',
    img: 'url(./images/ny.jpg)',
    title: 'Lets gooo',
    artist: 'Azizi',
    album: 'On Tour',
    description: 'The artist has decided to share his journey on becoming a software engineer',
}
var songList4 = {
    src: './audio/click.mp3',
    img: 'url(./images/sanfran.jpg)',
    title: 'Kau Ilhamku',
    artist: 'Marza',
    album: 'The love of My Life',
    description: 'Who would have thought your crush would love you back? Thats basically the story of my life',
}
var songList5 = {
    src: './audio/littlebit.mp3',
    img: 'url(./images/la.jpg)',
    title: 'What on Earth',
    artist: 'Lil Wayne',
    album: 'Bad Thing',
    description: 'Man, Im lost!',
}

function playButton () {
    if (isPlaying == false) {
        song.play();
        isPlaying = true;
        document.getElementById("song-button").innerHTML = "<i class='fa fa-pause'></i>";
        document.getElementById('song-button').style.backgroundColor = 'rgba(179, 157, 38, 0.932)';
        return;
    }
    if (isPlaying == true) {
        song.pause();
        isPlaying = false;
        document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
        document.getElementById('song-button').style.backgroundColor = 'transparent';
        return;
    }
}

function volumeButton(num) {
    volume += num;

    if (volume <= 0) {
        volume = 0;
    }
    else if (volume >= 1) {
        volume = 1;
    }
    console.log(volume);
    song.volume = volume;
    // volume2 = volume;
}

// function muteButton() {
//     if (volume > 0) {
//         volume = 0;
//         vid.volume = volume;
//         console.log (volume2);
//     }
//     else if (volume == 0) {
//         volume = volume2;
//         vid.volume = volume;
//     }
// }

document.getElementById('volDown').addEventListener('mousedown', downBtn);
document.getElementById('prevSong').addEventListener('mousedown', downBtn);
document.getElementById('nextSong').addEventListener('mousedown', downBtn);
document.getElementById('volUp').addEventListener('mousedown', downBtn);
function downBtn () {
    this.style.backgroundColor = 'rgba(204, 193, 133, 0.932)';
}

document.getElementById('volDown').addEventListener('mouseup', upBtn);
document.getElementById('prevSong').addEventListener('mouseup', upBtn);
document.getElementById('nextSong').addEventListener('mouseup', upBtn);
document.getElementById('volUp').addEventListener('mouseup', upBtn);
function upBtn () {
    this.style.backgroundColor = 'transparent';
}

function subSong(songData) {
    switch(songData) {
        case 'songList1':
            console.log(songList1.src);
            song.src = songList1.src;
            document.getElementById("mainCover").style.backgroundImage = songList1.img;
            document.getElementById("songTitle").innerHTML = songList1.title;
            document.getElementById("songArtist").innerHTML = songList1.artist;
            document.getElementById("songAlbum").innerHTML = songList1.album;
            document.getElementById("Desc1").innerHTML = songList1.description;
            break;
        case 'songList2':
            console.log(songList2.src);
            song.src = songList2.src;
            document.getElementById("mainCover").style.backgroundImage = songList2.img;
            document.getElementById("songTitle").innerHTML = songList2.title;
            document.getElementById("songArtist").innerHTML = songList2.artist;
            document.getElementById("songAlbum").innerHTML = songList2.album;
            document.getElementById("Desc1").innerHTML = songList2.description;
            break;
        case 'songList3':
            console.log(songList3.src);
            song.src = songList3.src;
            document.getElementById("mainCover").style.backgroundImage = songList3.img;
            document.getElementById("songTitle").innerHTML = songList3.title;
            document.getElementById("songArtist").innerHTML = songList3.artist;
            document.getElementById("songAlbum").innerHTML = songList3.album;
            document.getElementById("Desc1").innerHTML = songList3.description;
            break;
        case 'songList4':
            console.log(songList4.src);
            song.src = songList4.src;
            document.getElementById("mainCover").style.backgroundImage = songList4.img;
            document.getElementById("songTitle").innerHTML = songList4.title;
            document.getElementById("songArtist").innerHTML = songList4.artist;
            document.getElementById("songAlbum").innerHTML = songList4.album;
            document.getElementById("Desc1").innerHTML = songList4.description;
            break;
        case 'songList5':
            console.log(songList5.src);
            song.src = songList5.src;
            document.getElementById("mainCover").style.backgroundImage = songList5.img;
            document.getElementById("songTitle").innerHTML = songList5.title;
            document.getElementById("songArtist").innerHTML = songList5.artist;
            document.getElementById("songAlbum").innerHTML = songList5.album;
            document.getElementById("Desc1").innerHTML = songList5.description;
            break;
        default:
            console.log("show default");
            break;
    }
}

// function switchButton() {
//     document.getElementById("mainCover").style.backgroundImage = songPlaylistLibrary(i).img;
//     document.getElementById("songTitle").innerHTML = songPlaylistLibrary(i).title;
//     document.getElementById("songArtist").innerHTML = songPlaylistLibrary(i).artist;
//     document.getElementById("songAlbum").innerHTML = songPlaylistLibrary(i).album;
//     document.getElementById("Desc1").innerHTML = songPlaylistLibrary(i).description;
//     console.log(i);
//     i ++;
//     if (i > 4) {
//         i=0;
//     }
//     else if (i<0) {
//         i=4;
//     }
// }