let Main = () => {
  let name = "정건우";
  let age = 10;
  let isLogin = true;
  let user = {
    name: "홍길동",
    isLogin: true,
  };
  let myHobby = ["영화", "운동"];
  return (
    <>
      <h1>메인 영역</h1>
      저는 {name}이고, {age + 10}이고,
      {isLogin === true ? "로그인" : "로그아웃"}입니다.
      {String(isLogin)}이고, {myHobby}이다.
      {user.name}입니다.
    </>
  );
};
export default Main;
