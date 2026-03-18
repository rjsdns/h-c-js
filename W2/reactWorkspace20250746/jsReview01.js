// 데이터타입 : 숫자, 문자열, 부울린, null, undefined, NaN, "", 함수, 0, -0 ...
// 변수선언 : var, let, const(호이스팅)
// 연산자
// - 대입연산자 : =, ㅊㄹ) ==, ===
// - 산술연산자 : +, -, *, /, %
// - 복합 대입 연산자
// - 증감 연산자
// - 논리 연산자
// - 삼항 연산자
// - null 병합 연산자
// - typeof 연산자

var a2;
let a1 = 1;
console.log(a1);
const PI = 3.14;
let a3 = "동양";
let a4 = ` ${a3}는 동양미래대학생!`;
let a5 = 10 + "hi"; //10hi
let a6 = 10 + Number("5"); //String(1), Boolean(1)
let a9 = 10;
console.log(a9++);
console.log(++a9);

let a10 = true;
let a11 = false;
if (a11 && a10) {
}
