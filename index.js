/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

// host: crockett.highstone.biz (default port)
// l: portfolio
// p: Portfolio123

const express = require('express');
var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : 'crockett.highstone.biz',
  user     : 'portfolio',
  password : 'Portfolio123',
  database : 'sb_portfolio'
});

const app = express();
var cors = require('cors')

app.use(cors())

const port = process.env.PORT;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.listen(process.env.PORT || port);

const student = {
  firstname: "Lisa",
  lastname: "LaFlamme",
  age: 21,
  classes: ["street", "dancehall", "balett"]
  };

  const teacher = {
    firstname: "Adrienne",
    lastname: "Picard",
    age: 21,
    classes: ["street", "dancehall", "balett"]
    };

    // todo add classes


const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

// todo: functions to return number of students of a class, which dates a student/teacher has depending on classes


  let res;


app.get('/student', function (req, res) {
    res.json(student);
});

app.get('/teacher', function (req, res) {
  res.json(teacher);
});

app.get('/comment', function (req, res) {
  connection.query('SELECT * FROM `comment`', [], function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)

  res.json(results);

});
});

app.post('/comment', function (req, res) {
  var query = "INSERT INTO ??(??,??) VALUES (?,?)";
  var inserts = ['comment', 'author', 'body', req.body.author, req.body.body];
  sql = mysql.format(query, inserts);
  query = mysql.format(query,inserts);
  connection.query(query,function(err,rows){
    if(err) {
        res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    } else {
        res.json({"Error" : false, "Message" : "Comment Added !"});
    }
});
});
// todo add classes endpoint

console.log(`App listening on port ${port}`);
