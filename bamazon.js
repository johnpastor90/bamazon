var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Automata90!",
    database: "bamazon"
});

function catalog() {
    //prints the items for sale and their details
    connection.query('SELECT * FROM Products', function (err, res) {
        if (err) throw err;
        console.log("======================Welcome to Bamazon======================");
        console.log("||||||||||||||||||||Check out our Catalog|||||||||||||||||||||");

        for (i = 0; i < res.length; i++) {
            console.log("ID " + res[i].id + " Product " + res[i].product_name + " Department " + res[i].department_name + " Price " + " $" + res[i].price + " Remaining Stock " + res[i].stock_quantity)
        }
        console.log("==============================================================");
    })
};

catalog();

//inquirer.prompt([
  //  {
    ///    type: "input",
       // name: "id",
        //message: "What is the ID of the product you would like to purchase?",
   // }]);

   // Having issues getting it to appear after the catalog populates