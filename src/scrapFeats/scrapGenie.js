const puppeteer = require('puppeteer');
const fs = require("fs");

async function scrapGenie(url) {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    await page.goto(url);

    // 돔 요소 지정 후 스크랩 Geine의 요소구성 파악 후 수정
    const songs = await page.$$eval("", (elements) => {
        return elements.map((e) => ({
            song: e.querySelector("").innerText,
            artist: e.querySelector("").innerText,
        }));
    });
    console.log(songs);

    // JSON 파일에 저장
    fs.writeFile("playlist.json", JSON.stringify(songs), (err) => { //클라이언트에서 파일 시스템에 접근이 불가, 때문에 로컬스토리지로 변경
        if (err) throw err;
        console.log("파일 저장 완료");
    });

    // 기본 순환: 열었으면 닫아야 함
    await browser.close();
}
export default scrapMelon