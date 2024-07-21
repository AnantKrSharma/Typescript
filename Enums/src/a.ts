enum Direction{
    Up = 'North',
    Down = 'South',
    Left = 'West',
    Right = 'East'
}

function doSomething(key: Direction){
    if(key == Direction.Up){
        return;
    }
}

doSomething(Direction.Up);
doSomething(Direction.Down);

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);


// --- Use case of Enums in Express backend --- 

enum ResponseStatus{
    Success = 200,
    NotFound = 404,
    Error = 500
}

// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//     if(!req.query.userID){
//         res.status(ResponseStatus.NotFound).json({});
//     }
// })

// app.post('/signup', (req, res) => {
//     if(!req.body.username || !req.body.password){
//         res.status(ResponseStatus.Error).json({});
//     }

//     res.status(ResponseStatus.Success).json({});
// })
