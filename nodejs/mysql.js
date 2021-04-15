var mysql      = require('mysql'); //mysql 이란 모듈을 할건데 그것을 mysql이라는 변수로 사용하겠다.
var connection = mysql.createConnection({ 
    host     : 'localhost',
    user     : 'nodejs',//나는 오류로인해nodejs로 만들었음을 기억하자
    password : '111111',
    database : 'opentutorials'
    });
    
connection.connect(); //접속

connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();