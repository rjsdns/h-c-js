import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import SimpleCounter from './pages/SimpleCounter'
import TimerPage from './pages/TimerPage'
import TodoPage from './pages/TodoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to={"/"}>홈</Link>
    <Link to={"/user"}>사용자</Link>  
    <Link to={"/simple"}>간단한 카운터</Link>
    <Link to={"/timer"}>타이머</Link>
    <Link to={"/todo"}>할 일</Link>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/simple" element={<SimpleCounter/>}/>
      <Route path="/timer" element={<TimerPage/>}/>
      <Route path="/todo" element={<TodoPage/>}/>
    </Routes>
    </>
  )
}

export default App
