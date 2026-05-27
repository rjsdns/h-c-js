import { useState } from "react";
import Timer from "../components/Timer";
function TimerPage() {
  const [isTimer, setIsTimer] = useState(false);
  return (
    <>
        <h1>타이머 페이지</h1>: useEffect와 setInterval함수 예제
        <div>
        {isTimer === true ? <Timer /> : null}
        </div>

        <button onClick={()=>{setIsTimer(!isTimer)}}> 타이머 {isTimer? "중지":"시작"}</button>
    </>
  );
}

export default TimerPage
