import { useState } from "react";
function App() {
  let [state, setState] = useState(0);

  let btnClick = () => {
    setState(state++);
  };
  return (
    <>
      <h1>현재값 : {state}</h1>
      <button onclick={btnClick}>증가</button>
    </>
  );
}

export default App;
