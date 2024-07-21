type Input = string | number;

function firstEl(arr: Input[]){
    return arr[0];
}

const numberAns = firstEl([1, 2, 3]);  // hover over 'numberAns'
const stringAns = firstEl(['A', 'K', 'S']);  // hover over 'stringAns'
// console.log(stringAns.toLowerCase());   // will show error


// --- GENERICS ---

function lastEl<T>(arr: T[]){
    return arr[arr.length-1];
}

const numberAnswer = lastEl<number>([1.3, 2.2, 3.4]); // even if we don't write <number> or <string>, it's fine.
const stringAnswer = lastEl<string>(['A', 'K', 'S']);

console.log(numberAnswer.toFixed());
console.log(stringAnswer.toLowerCase());  // no error
