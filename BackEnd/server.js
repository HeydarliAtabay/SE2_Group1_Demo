'use strict';
//import express
const express = require('express');
// logging middleware
const morgan = require('morgan'); 

//create application
const app = express();
const port = 3001;

// Set-up logging
app.use(morgan('tiny'));

// Process body content
app.use(express.json());


//POST  /user/<userId>/<serviceType>
app.post('/api/user/:uderId/:serviceType',(req, res) => {
    
});



//activate server
app.listen(port, () => console.log('Server ready'));