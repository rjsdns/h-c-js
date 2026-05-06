import { useEffect, useRef, useState } from "react";
import Viewer from "./sub/Viewer";
import Controller from "./sub/Controller";
import Even from "./sub/Even";
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  let isMount = useRef(false);

  // 1. update
  useEffect( ()=>{
    console.log(`count:${count}`);
  }, [ count ]);

  useEffect( ()=>{
    console.log(`All: count:${count}, input:${input}`);
  },);

  useEffect(()=>{
    if(!isMount.current){
      isMount.current=true;
      console.log("마운트2")
      return;
    }else{
      console.log(`All: count:${count}, input:${input}`);
    }
  });

  // 2. mount
  useEffect(()=>{
    console.log("마운트");
  },[]);

  // 3. unmount
  useEffect(()=>{
    console.log("언마운트")
  },[]);
  const onClickBtn = (value) => {
    setCount(count + value);
  };

  
  return (
    <>
      <h1> Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      </section>
      <section>
        <Viewer count={count} />
        {count%2===0? <Even/> : null}
      </section>
      <section>
        <Controller onClickFun={onClickBtn} />
      </section>
    </>
  );
}

export default App;
