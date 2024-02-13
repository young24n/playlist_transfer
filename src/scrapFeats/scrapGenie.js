import puppeteer from 'puppeteer';

async function scrapGenie(url) {
    const playlist = [];
    const newSong = null;
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    await page.goto(url);

    //DOM 요소 지정 후 스크랩, Geine의 요소구성 파악 후 수정
    const songs = await page.$$eval("", (elements) => {
        return elements.map((e) => {// 노래 정보를 추가
            newSong = {
                song: e.querySelector("").innerText,
                artist: e.querySelector("").innerText,
            }
            // 배열에 노래 정보 추가
            playlist.push(newSong);
            //localStorage 업데이트
            localStorage.setItem("playlist", JSON.stringify(playlist));
            
            loadPlaylist(playlist)
        });
    });
    console.log(playlist);


    // 기본 순환: 열었으면 닫아야 함
    await browser.close();
}

// 로컬 스토리지에서 저장된 재생목록을 불러오는 함수
function loadPlaylist(playlist) {
    const storedPlaylist = localStorage.getItem("playlist");

    // 저장된 재생목록이 있을 경우 불러오기
    if (storedPlaylist) {
        playlist = JSON.parse(storedPlaylist);
    }
}


// 예시: 로컬 스토리지에서 재생목록 불러오기
loadPlaylist();

export default scrapGenie