import "./Header.css";

let Header = () => {
  let cssVar = {
    //오브젝트 선언
    backgroundColor: "yellow",
    marginBottom: "50px",
  };
  return (
    <>
      <h1 style={cssVar}>헤더 영역</h1>
      <h1 style={{ color: "red" }}>메뉴 : 홈 게시판 오시는길</h1>
      <h2>나는 외부 css파일 내용으로 적용</h2>
    </>
  );
};
export default Header;
