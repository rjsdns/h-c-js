//객체
let obj1 = new Object();
let obj2 = {
  name: "김말자",
  age: 20,
  eat: function () {},
};

obj1.name = "정건우";

obj2.age = 10;
obj2.eat();
obj2["age"] = 5;
let keyName = "eat";
obj2[keyName]();

// -------------얕은 복사 vs 깊은 복사
let o1 = { name: "홍길동" };
let o2 = { ...o1 };
let o3 = { name: "홍길동" };

console.log(o1 === o2); //
console.log(o2);
console.log(o1 === o3); //false

console.log(JSON.stringify(o1) === JSON.stringify(o3)); //true
