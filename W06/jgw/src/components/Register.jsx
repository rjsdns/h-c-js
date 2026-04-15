import { useState } from "react";

export default function Register() {
  let [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
  });
  let onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h1>회원 가입</h1>
      이름 : <input name="name" value={input.name} onchange={onChange} />
      {input.name}
      <br />
      생일 : 
      <input name="birth" type="date" value={input.birth} onchange={onChange} />
      {input.birth}
      <br />
      국가 :{" "}
      <select name="country" value={input.country} onchange={onChange}>
        <option value=""></option>
        <option value="kr">한국</option>
        <option value="us">미국</option>
      </select>
      {input.country}
    </>
  );
}
