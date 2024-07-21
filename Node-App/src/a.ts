let x: number = 100;
const y: string = 'AKS';
const z: boolean = true
let a: any = 500;
a = 'Woah.. any type!'

console.log(`${x} ; ${y} ; ${z} ; ${a}`);


// A normal function that just accepts many arguments (whose type has to be defined in advance), and logs them.
function greet(firstName: string, lastName: string, age: number){
    console.log(`Hello ${firstName} ${lastName}, your age is ${age}.`);
}

greet('Anant', 'Kr Sharma', 21);


// Sum function
function sum(a: number, b: number): number{   // -- Type-Inference -- means if we didn't give an explicit return type (:number) at the end of the function, and TS automatically inferences what the return type is.
    return a + b;
}

const val = sum(2, 3.5);
console.log(val);


// Age function, that tells whether above 18 or not.
function isLegal(age: number): boolean{
    return age > 18 ? true : false; 
}

const ans = isLegal(21);
console.log(ans);


// A function that takes another function as an input, and runs it after one second.
function runAfter5Sec(fn: () => void){
    setTimeout(fn, 5000);
}

runAfter5Sec( function(){
    console.log('Ran after 5 seconds.');
});


// --- INTERFACE ---
interface User{
    firstName: string;
    lastName: string;
    age: number;
    email?: string
}

// A function that checks if a user is legal or not, when given an object as the input.
function isLegal_2(user: User){
    if(user.age > 18){
        console.log("Legal");
    }
    else{
        console.log("Not Legal");
    }
}

isLegal_2({
    firstName: "Anant",
    lastName: "Kr Sharma",
    age: 21
})
