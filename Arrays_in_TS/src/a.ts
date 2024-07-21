// simply add [] in front of the type.

function findMax(arr: number[]){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

const ans = findMax([1,2,3,4,5]);
console.log(ans);


interface User{
    firstName: string;
    age: number
}

function isLegal(users: User[]){
    return users.filter( (item: User)=> item.age > 18 )
}

const filteredUsers = isLegal([
    {
        firstName: 'Anant',
        age: 21
    },
    {   
        firstName: 'Shubhi',
        age: 15
    },
    {
        firstName: 'Arnav',
        age: 14
    }
])

console.log(filteredUsers);
