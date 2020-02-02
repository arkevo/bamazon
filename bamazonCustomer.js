var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var table = new Table({
  head: ["ID", "Product", "Department", "Price", "Stock Quantity"],
  colWidths: [5, 20, 15, 8, 18]
});

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1234",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log("connected as id " + connection.threadId + "\n");

    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        table.push([
          res[i].id,
          res[i].product_name,
          res[i].department_name,
          res[i].price,
          res[i].stock_quantity
        ]);
      }

      console.log(table.toString());

      buyFunction();
    });
  }
});

function buyFunction() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "productID",
        message: "Enter the ID of the product you would like to buy:"
      },
      {
        type: "input",
        name: "quantity",
        message: "How many units would you like to buy?"
      }
    ])
    .then(function(data) {
      var userQuantity = parseInt(data.quantity);
      var userProduct = data.productID;

      connection.query(
        "SELECT id, stock_quantity, price FROM products",
        function(err, res) {
          var stockQty = 0;
          var stockId = 0;
          var stockCost = 0;

          if (err) throw err;

          for (var i = 0; i < res.length; i++) {
            if (res[i].id == userProduct) {
              stockQty = res[i].stock_quantity;
              stockId = res[i].id;
              stockCost = res[i].price;
            }
          }

          if (stockQty < userQuantity) {
            console.log("Sold Out!");
          } else {
            var newStockAmt = stockQty - userQuantity;
            var totalCost = userQuantity * stockCost;

            var updateSql =
              "UPDATE products SET stock_quantity = ? WHERE id = ?";

            connection.query(updateSql, [newStockAmt, stockId], function(
              error,
              results,
              fields
            ) {
              console.log("The quantity has been updated");

              console.log("You owe $" + totalCost);
            });
          }
          connection.end();
        }
      );
    });
}
