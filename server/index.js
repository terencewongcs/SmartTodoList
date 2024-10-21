const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();

app.use(cors());

const PORT = 3000;

const todoRouter = require('./routes/todos');
const { Todo } = require('./models/Todo');

const connectDB = require('./db');
connectDB();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', todoRouter);

app.get('/', async(req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);