import puppeteer from 'puppeteer-web';
let browserWSEndpoint = '';

async function initiatePuppeteer() {
  await fetch("http://127.0.0.1:9222/json/version")
    .then(response => response.json())
    .then(function(data) {
        browserWSEndpoint = data.webSocketDebuggerUrl;
      })
    .catch(error => console.log(error));
}

initiatePuppeteer();

async function doPuppeteerThings(url) {

    // Puppeteer를 사용하여 원격연결
    const browser = await puppeteer.connect({
        browserWSEndpoint: "ws://127.0.0.1:9222/devtools/browser/0611d9b5-958f-48a2-8aa5-7c7ac8ac168e",        
    });

    // Puppeteer로 원격 웹 페이지에서 작업 수행
    const page = await browser.newPage();
    await page.goto(url);
    const songs = await page.$$eval(".section_playlist tbody tr", (elements) => {
        return elements.map((e) => ({
            song: e.querySelector(".fc_gray").innerText,
            artist: e.querySelector(".fc_mgray").innerText,
        }));
    });
    console.log(songs);

    // Puppeteer 브라우저 닫기
    await browser.close();
}

// CORS 문제를 해결하기 위한 프록시 설정
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// 원격 서버에 요청을 보내는 함수를 프록시를 통해 보내도록 수정
async function sendRequest(url) {
    const response = await fetch(proxyUrl + url);
    return response;
}

export default doPuppeteerThings