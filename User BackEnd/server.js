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


//POST  /user/<userId>/<serviceType></serviceType>
app.post('/api/user/:uderId/:serviceType',(req, res) => {
    if(req.body.serviceType && req.body.userId){
        serviceDao.searchQueue(req.body.serviceType)
        .then((queue) => {
            queueDao.saveUser(req.body.userId, queue.Id)
            .then(() => res.status(201).json({"id" : queue.Id , "msg" : `User ${req.body.userId} added to queue ${queue.Id}`}))
            .catch();})
        .catch();

    } else {
        res.status(400).send({
            errors: [{ 'param': 'Server', msg:'Invalid request'}]
        });
    }
});



//activate server
app.listen(port, () => console.log('Server ready'));