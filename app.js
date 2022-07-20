const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

const dotenv = require('dotenv');


// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.get('/employees', (req, res) => {
//     res.send('Employees');
// });

const connectDB = require('./config/db');

// Load Config
dotenv.config({ path: './config/config.env' });
connectDB();

// Define Routes
app.use('/', require('./routes/index'));

app.listen(3000);
