// Types and Interface are almost similar, --- but we can't implement a class using Types ---.

type Person = {
    name: string;
    age: number;
}


type GreetArg = number | string | boolean;

function greet(id: GreetArg){
    console.log(id);
}

greet(1);
greet('A-K-S');
greet(true);


// --- Intersection in Types ---

type Employee = {
    name: string;
    startDate: Date;
}

interface Manager{
    name: string;
    department: string;
}

type Techlead = Employee & Manager;

const obj: Techlead = {
    name: 'Anant Kr Sharma',
    startDate: new Date(),
    department: 'Web Development'
}

console.log(obj);
