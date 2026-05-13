// import { useEffect, useRef, useState } from "react";
import UserList from "./sub/UserList";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import SimpleCounter from "./pages/SimpleCounter";
import Home from "./pages/Home";
function App() {
  const navi=useNavigate();
  const onClickbtn=()=>{
    navi("/");
  }

  return (
  <>
  <Link to={"/"}>홈</Link>
  <Link to={"/user"}>사용자 목록</Link>
  <Link to={"/simple"}>간단한 카운터</Link>
  <button onClick={onClickbtn}>Go 홈</button>

  <br/><hr/>
  <Link to={"/"}>홈</Link>
  <Link to={"/user"}>사용자 목록</Link>
  <Link to={"/simple"}>간단한 카운터</Link>
  <button onClick={onClickbtn}>Go 홈</button>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/simple" element={<SimpleCounter/>} />
    <Route path="/user" element={<UserList/>}/>
  </Routes>
  </>
  )
}

export default App;
