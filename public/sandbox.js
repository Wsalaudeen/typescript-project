"use strict";
// let greet = () => {
//   console.log("hello, world");
// };
// let greet: Function;
// greet = () => {
//   console.log("hello, world");
// };
// const add1 = (a: number, b: number, c: number | string = 10): void => {
//   console.log(a + b);
//   //   console.log(c);
// };
// // // console.log(add1(10, 20));
// add1(10, 20);
// // greet = "hello";
// const minus = (a: number, b: number) => {
//   return a + b;
// };
// let result = minus(10, 7);
// console.log(result);
// type StringorNum = string | number;
// type objWithName = { name: string; uid: StringorNum };
// const logDetails = (uid: StringorNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// logDetails("20", "bottle");
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello ${user.uid} times`);
// };
// greet({ name: "lanre", uid: 10 });
// let greet: Function;
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
