const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const port = 4000;
//middleware setup
app.use(cors());
app.use(bodyParser.json());

//use your authroutes
app.use('/',authRoutes);

//starting the server
app.listen(port, () =>{
    console.log(`🚀 Server running at http://localhost:${port}`);
});