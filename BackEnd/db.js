'use strict';

const sqlite = require('sqlite3').verbose();

const DBSOURCE = './db/OfficeQueueDB.db';

const db = new sqlite.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    }
});

module.exports = db;
