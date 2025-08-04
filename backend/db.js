const mysql = require('mysql2');

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'user_auth'
});

db.connect((err) =>{
   if (err) {
    console.error('❌ DB connection failed:',err);
   }else{
    console.log('✅ Connected to mysql database');
   }
});

module.exports = db;