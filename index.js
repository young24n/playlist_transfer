const puppeteer = require('puppeteer');
const fs = require("fs");

async function run(){
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();
    /*
    기본순환->
    -> 무조건 YTMusic으로 변환
    -> 재생목록 url 입력 페이지로 이동 X 그냥 URL 페이지만 보여주기
    url 에서 플랫폼 인식(3가지) -> 플랫폼 인식 후 그에 맞는 스크랩 방식 적용(3개의 함수 필요)
    노래 제목과 아티스트를 JSON으로 변환
    JSON 내역을 토대로 선택된 플랫폼에 따른 재생목록 생성(생성방식 3가지)
    실패내역 성공내역 정리하여 알림 */

    await page.goto("input value");//인풋 벨류로 가져오고
    // 재생목록을 어떻게 제작할 것 인지 만들기 플랫 폼 3개니깐 각각 파일로 만들어서
    // 재생목록이 만들어 지는지 테스트 파일명은 플랫폼 + maker


    fs.writeFile("playlist.json", JSON.stringify(), (err)=>{
        if(err) throw err;
        console.log("파일 저장완료")
    })
    //기본 순환 열었으면 닫아야함
    await browser.close();
}

run();