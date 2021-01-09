const mysql = require('mysql');

//database作成処理
// function createDatabase() {
//     const con = mysql.createConnection({
//         host:   'localhost.localdomain', //接続先ホスト
//         user     : 'root',      //ユーザー名
//         password : 'Ken!chiiwa0807',          //パスワード
//     });
      
//     con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         con.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//         });
//     });
// };
// createDatabase();

//database作成処理
function createTable() {
    const con = mysql.createConnection({
        host:   'localhost.localdomain', //接続先ホスト
        user     : 'root',      //ユーザー名
        password : 'Ken!chiiwa0807',          //パスワード
        database: "mydb"
    });
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE TABLE sample (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)", function (err, result) {
        if (err) throw err;
        console.log("Table created");
        });
    });
 };

createTable();

//実行コマンド
//npx nodemon create.js