let a1 = new Array();
let a2 = [1, 20, 3];
a2[1] = 10;
console.log(a2);

let obj = {
  name: "동양",
  age: 4,
  gender: "남",
};
let a3 = [1, 2, 3];
let [b1, b2, b3, b4] = a3;
console.log(b4);
let { gender, name = "na", age } = obj;
console.log(obj);

// ---------
let func1 = ([b1, b2, b3, b4 = 0]) => {
  console.log(b2);
};
func1(a3);

let func2 = ({ name, age, gender }) => {
  console.log(name);
};
func2(obj);

//-----spread연산자 / rest 매개변
let sA3 = [10, ...a3];

//------------
let obj2 = [
  { name: "에스파", hobby: "영화" },
  { name: "아이유", hobby: "독서" },
  { name: "홍길동", hobby: "영화" },
];
let result = obj2.filter((item) => {
  if (item.hobby === "영화") {
    return true;
  }
});
