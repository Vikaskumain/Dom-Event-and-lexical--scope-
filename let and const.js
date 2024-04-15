           // let and const varible defination 

     


// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;
// console.log(window.a); // undefined
// console.log(window.b); // 15

        // Let is a stricter version of var. Now, const is even more stricter than let.
 
let a;
a = 10;
console.log(a) // 10. Note declaration and assigning of a is in different lines.

// const b;
// b = 10;
// console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of
// declaration won't work with const. const b = 10 only will work)



const c = 100;
c = 1000; 
console.log(c)
//this gives us TypeError: Assignment to constant variable