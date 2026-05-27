import { useState } from "react";
import Header from "../components/Header";
import Editor from "../components/Editor";
import List from "../components/List";

const mockDate=[
        {
            id:0,
            isDone:false,
            content:"React 공부",
            date:new Date().toLocaleString()
        },
        {
            id:1,
            isDone:false,
            content:"빨래 하기",
            date:new Date().toLocaleString()
        },
        {
            id:2,
            isDone:false,
            content:"노래 연습",
            date:new Date().toLocaleString()
        }
    ];
function TodoPage() {
    const [todos, setTodos] = useState(mockDate);
    
    return (
    <>
        <Header/>
        <Editor/>
        <List/>
    </>
    );
}

export default TodoPage
