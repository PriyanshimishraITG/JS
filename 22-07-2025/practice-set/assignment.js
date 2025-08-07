// 1 //
// let arr = [2, 3, 4, 5, 5, 4, 7, 8, 0, 6];
// let arr1 = arr.map(  (value, index) => value*2);
// console.log(arr1);


// 2 //
// let arr =  ['a', 'b', 'c'];
// let arr1 = arr.map(  (value, index) => value.toUpperCase());
// console.log(arr1);


// 3 //
// let arr = [{ name: 'Alice' }, { name: 'Bob' }];
// let arr1 = arr.map((value, index) => value.name);
// console.log(arr1);


// 4 //
// let arr = ['hi', 'hello'];
// let arr1 = arr.map((value, index) => value +'!');
// console.log(arr1);


// 5 //
// let arr = [1, 2, 3];
// let arr1 = arr.map(  (value, index) => value.toString());
// console.log(arr1);


// 6 //
// let arr = [1, 2, 3];
// arr.forEach ( (value, index, arr) => {
//     console.log(value);
// });


// 7 //
// let arr = [1, 2, 3];
// let sum = 0;
// arr.forEach ( (value, index, arr) => {
//     sum = sum + value;
// });
// console.log(sum);


// 8 //
// let arr = ['apple', 'banana'];
// let 


// 9 //
// let arr =  [2, 3, 4];
// arr.forEach ( (value, index, arr) => {
//     console.log(value*2);
// });


// 10 //
// let arr =  ['a', 'b'];
// arr.forEach ( (value, index, arr) => {
//     console.log(`Index ${index}: ${value}`);
// });


// 11 //
// let arr =  [1, 2, 3, 4];
// let arr1 = arr.filter(  (value) => {
//     if ((value % 2) === 0) return true;
//     return false;
// });
// console.log(arr1);


// 12 //
// let arr =  [{ age: 17 }, { age: 19 }];
// let arr1 = arr.filter(  (value) => {
//     if (value.age > 18) return true;
//     return false;
// });
// console.log(arr1);


// 13 //
// let arr = [0, 1, false, 'hello', null];
// let arr1 = arr.filter(  (value) => {
//     if (value != false && value !== null  && value !== undefined && value !== NaN) return true;
//     return false;
// });
// console.log(arr1);


// 14 //
// let arr = ['hi', 'hello'];
// let arr1 = arr.filter(  (value) => {
//     if (value.length > 3) return true;
//     return false;
// });
// console.log(arr1);


// 15 //
// let arr = [{ name: 'X' }, { name: 'Y', active: true }];
// let arr1 = arr.filter(  (value, i, arr) => {
//     if (value.active) return true;
//     return false;
// });
// console.log(arr1);


// 16 //
// let arr = [1, 2, 3, 4];
// let arr1 = arr.filter(  (value) => {
//     if ((value % 2) === 0) return true;
// });
// let arr2 = arr1.map(  (value) => {      
//     return value*2;        
// });console.log(arr2);


// 17 //
let arr = [{ name: 'A', age: 20 }, { name: 'B', age: 25 }];
let arr1 = arr.filter(  (value) => {
    if (value.age > 20) return true;
    return false;
});
console.log(arr1);


// 18 //
  