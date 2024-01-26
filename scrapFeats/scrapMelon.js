const puppeteer = require('puppeteer');
const fs = require("fs");

async function run(){
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();
   
    await page.goto("input value");//인풋 벨류로 가져오고


    fs.writeFile("playlist.json", JSON.stringify(), (err)=>{
        if(err) throw err;
        console.log("파일 저장완료")
    })
    //기본 순환 열었으면 닫아야함
    await browser.close();
}

run();