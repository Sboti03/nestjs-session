"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql2");
exports.default = mysql
    .createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database',
})
    .promise();
//# sourceMappingURL=db.js.map