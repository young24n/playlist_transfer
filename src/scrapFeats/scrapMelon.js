const puppeteer = require('puppeteer');
const fs = require("fs");

async function scrapMelon(url) {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    await page.goto(url);

    // 돔 요소 파악 후 스크랩 지정
    const songs = await page.$$eval(".section_playlist tbody tr", (elements) => {
        return elements.map((e) => ({
            song: e.querySelector(".fc_gray").innerText,
            artist: e.querySelector(".fc_mgray").innerText,
        }));
    });
    console.log(songs);

    // JSON 파일에 저장
    fs.writeFile("playlist.json", JSON.stringify(songs), (err) => {
        if (err) throw err;
        console.log("파일 저장 완료");
    });

    // 기본 순환 열었으면 닫아야 함
    await browser.close();
}

export default scrapMelon