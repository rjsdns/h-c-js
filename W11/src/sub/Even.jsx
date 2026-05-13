import { useEffect } from "react";

const Even=({})=>{
    useEffect(()=>{
        return ()=>{
            console.log("언마운트");
        }; //클린업함수 : 메모리 청소 작업
    }, []);

    return(
        <>
        짝수
        </>
    )
};

export default Even;