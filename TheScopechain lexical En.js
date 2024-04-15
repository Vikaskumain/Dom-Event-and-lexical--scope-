                        //   defination about scope chain and lexical envirnment ****



// Scope in Javascript is directly related to Lexical Environment
//  scope chain local memory+lexical environment 
//  first thing we create a function and then print to inside varible but we difined varible to outside of function  let seee


// CASE NO 01 
function vikas (){
    console.log(x)
}
 var x=45;
 vikas()


//  CASE NO 02


function kumain(){
    vikas()
    function vikas(){
        console.log(x)
    }
}
var x =27;
kumain()

// CASE NO 03
 function vikas(){
    let x=45;
    function kumain(){
        console.log(x)
    }
    kumain()
 }
 let x=24;
 vikas();
 console.log(x)

// CASE NO 04
function a(){
    var x=42;
    c()
    function c(){
console.log(x)
    }

 }
 a()
 
 console.log(x)


//  Let's try to understand the output in each of the cases above.

//  In case 1: function a is able to access variable b from Global scope.
//  In case 2: 10 is printed. It means that within nested function too, the global scope variable can be accessed.
//  In case 3: 100 is printed meaning local variable of the same name took precedence over a global variable.
//  In case 4: A function can access a global variable, but the global execution context can't access any local
//  variable.