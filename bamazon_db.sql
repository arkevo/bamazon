DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nalgene Water Bottle", "outdoors", 12.5, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chair", "furniture", 23.3, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coding 101", "books", 12.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone 11", "electronics", 9.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plates", "kitchen", 14.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pans", "kitchen", 17.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tape", "home", 4.99, 38);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Pro", "electronics", 2715.59, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nortface Jacket", "clothing", 49.99, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rug", "home", 69.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "sports", 29.99, 3324);

