import puppeteer from 'puppeteer-web';

async function scrapMelon(url) {
    const browser = await puppeteer.connect({
        browserWSEndpoint: `http://127.0.0.1:9222/json/version`, // <-- connect to a server running somewhere 된다!!!!!
        ignoreHTTPSErrors: true
    });
    const pagesCount = (await browser.pages()).length;
    const browserWSEndpoint = await browser.wsEndpoint();
    console.log({ browserWSEndpoint, pagesCount });
    const page = await browser.newPage();
    await page.goto(url);

    // 돔 요소 파악 후 스크랩 지정
    const songs = await page.$$eval(".section_playlist tbody tr", (elements) => {
        return elements.map((e) => ({
            song: e.querySelector(".fc_gray").innerText,
            artist: e.querySelector(".fc_mgray").innerText,yarn
        }));
    });
    console.log(songs);
}

export default scrapMelon