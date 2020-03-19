DROP DATABASE IF EXISTS greatBay_db;

CREATE DATABASE greatBay_db;

USE greatBay_db;

CREATE TABLE auctions (
  id INTEGER NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(45) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INTEGER (11) DEFAULT 0,
  highest_bid INTEGER (11) DEFAULT 0,
  PRIMARY KEY (id)
);

INSERT INTO auctions (item_name, category, starting_bid, highest_bid)
VALUES ('Pens', 'supplies', 5, 7), ('Pencils', 'supplies', 3, 3), ('shirt', 'clothing', 20, 20), ('sweater', 'clothing', 50, 125), ('sanitizer', 'health', 100, 300), ('vitamins', 'health', 20, 21);



