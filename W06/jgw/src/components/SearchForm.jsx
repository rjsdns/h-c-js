import { useState } from "react";

export default function SearchForm(){
    let [searchKeyword, setSearchKeyword]=useState("");
    let searchOnChange=(e)=>{
        console.log("이벤트 타겟 이름 : "+e.target.name);
        console.log("이벤트 값 : "+e.target.value);
        setSearchKeyword(e.target.value);
    };
    return(
        <>
        검색어 : <input name="keyword" onChange={searchOnChange}/>{searchKeyword}
        </>
    );
}