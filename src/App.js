import { useState } from 'react';
import './App.css';
import scrapMelon from '../scrapFeats/scrapMelon'
function App() {
  const [url, seturl] = useState("")
  return (
    <div>
      <h6 style="text-align: center; font-family: Gamja Flower; margin-bottom: 0px;">YTMusic으로 변환할 재생목록의 URL을 입력해주세요</h6>
      <h6 style="text-align: center; font-family: Gamja Flower; margin: 0px; border: 0px; color: #c6c3c3;">Melon, Genie 플랫폼만 사용가능</h6>
      <hr class="hr-1"/>
      <div>
          <input type="text" onChange={(e)=>{
            seturl(e.target.value)
          }}/>
      </div>
      <button class="button btnGenie btnOrange" onClick={(e)=>{
        if(url.includes('www.melon.com')){
          scrapMelon(url)
        }
        else if(url.includes('www.genie.com')){
          scrapGenie(url)
        }
        else{console.log("지원하지 않는 URL입니다.(멜론, 지니뮤직만 지원)")}
      }}/>
    </div>
  );
}

export default App;
