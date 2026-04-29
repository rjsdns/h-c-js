import { useRef, useState } from "react";

export default function Register() {
  let refObj = useRef(0);
  let inputRef = useRef();
  let [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
  });
  let onChange = (e) => {
    refObj.current++;
    console.log(`호출 횟수 : ${refObj.current}번`);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  let onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <h1>회원 가입</h1>
      이름 :{" "}
      <input
        ref={inputRef}
        name="name"
        value={input.name}
        onChange={onChange}
      />
      {input.name}
      <br />
      생일 :{" "}
      <input name="birth" type="date" value={input.birth} onChange={onChange} />
      {input.birth}
      <br />
      국가 :{" "}
      <select name="country" value={input.country} onChange={onChange}>
        <option value=""></option>
        <option value="kr">한국</option>
        <option value="us">미국</option>
      </select>
      {input.country}
      <button onClick={onSubmit}>제출</button>
    </>
  );
}
