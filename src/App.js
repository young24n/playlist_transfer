import { useState } from 'react';
import './App.css';
import scrapMelon from './scrapFeats/scrapMelon'
import scrapGenie from './scrapFeats/scrapGenie';

function App() {
    const [url, seturl] = useState("")
  return (
    <div>
      <h6 style="text-align: center; font-family: Gamja Flower; margin-bottom: 0px;">YTMusic으로 변환할 재생목록의 URL을 입력해주세요</h6>
      <h6 style="text-align: center; font-family: Gamja Flower; margin: 0px; border: 0px; color: #c6c3c3;">Melon, Genie 플랫폼만 사용가능</h6>
      <hr class="hr-1"/>
      <div>
          <input type="text" onChange={(e)=>{//url 입력
            seturl(e.target.value)
          }}/>
      </div>
      <button class="button btnGenie btnOrange" onClick={()=>{//클릭 시 url 판단
        if(url.includes('www.melon.com')){
          scrapMelon(url)
        }
        else if(url.includes('www.genie.com')){
          scrapGenie(url)
        }
        else{alert("지원하지 않는 URL입니다.(멜론, 지니뮤직만 지원)")}

        //youtube api 땡겨온 후 재생목록 생성함수 추가
      }}></button>
    </div>
  );
}

export default App;
