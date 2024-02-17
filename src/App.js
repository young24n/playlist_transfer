import { useState } from 'react';
import './App.css';
import doPuppeteerThings from './scrapFeats/scrapMelon';
// import scrapGenie from './scrapFeats/scrapGenie';

function App() {
    const [url, seturl] = useState("")
  return (
    <div>
      <h6 className='h-inpo1'>YTMusic으로 변환할 재생목록의 URL을 입력해주세요</h6>
      <h6 className='h-inpo2'>Melon, Genie 플랫폼만 사용가능</h6>
      <hr className="hr-1"/>
      <div>
          <input type="text" onChange={(e)=>{//url 입력
            seturl(e.target.value)
          }}/>
      </div>
      <button className="button btnGenie btnOrange" onClick={()=>{//클릭 시 url 판단
          doPuppeteerThings(url)
        //youtube api 땡겨온 후 재생목록 생성함수 추가
      }}/>
    </div>
  );
}

export default App;