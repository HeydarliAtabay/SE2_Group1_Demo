'use strict';

// const db = require('./db');

const services = ["Service #1", "Service #2", "Service #3"];
let counter_service = ["Service #1", "Service #3"];


exports.getServices = function () {
    return new Promise((resolve, reject) => {
        // const sql = "SELECT Service_Type FROM Service";
        // db.all(sql, (err, rows) => {
        //     if(err) reject(err);
        //     else resolve(rows);
        // });
        resolve(services);
    });
}

// returns an array with Service Types related to the given counter ID
exports.getCounterInfo = function (params) {
    return new Promise((resolve, reject) => {
        // const sql = "SELECT Service_Type FROM Counter WHERE Counter_ID=?";
        // db.all(sql, [params.counterId], (err, rows) => {
        //     if(err) reject(err);
        //     else resolve(rows);
        // });
        resolve(counter_service);
    });
}

// add a new line into counter_service table
exports.addService = function (params) {
    return new Promise((resolve, reject) => {
        // const sql = "INSERT INTO COUNTER_SERVICE(CounterId, ServiceType) VALUES(?, ?)";
        // db.run(sql, [params.counterId, params.serviceType], (err) => {
        //     if(err) reject(err);
        //     else resolve();
        // });
        counter_service.push(params.serviceType);
        resolve();
    });
}

// remove a line from counter_service table
exports.removeService = function (params) {
    return new Promise((resolve, reject) => {
        // const sql = "DELETE FROM COUNTER_SERVICE WHERE CounterId=? AND ServiceType=?";
        // db.run(sql, [params.counterId, params.serviceType], (err) => {
        //     if(err) reject(err);
        //     else resolve();
        // });
        counter_service = counter_service.filter( (s) => s !== params.serviceType);
        resolve();
    });
}
