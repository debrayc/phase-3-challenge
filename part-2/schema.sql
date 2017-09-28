DROP DATABASE IF EXISTS grocery_store
CREATE DATABASE grocery_store;

/c grocery_store

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(70),
  section VARCHAR(70),
  price MONEY
);

CREATE TABLE shoppers(
  shopper_id SERIAL PRIMARY KEY,
  shopper_name VARCHAR(70)
);

CREATE TABLE orders(
  order_id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers(shopper_id)
  order_date TIMESTAMP 
);

CREATE TABLE cart(
  cart_id INTEGER REFERENCES orders(order_id),
  shopper_id INTEGER REFERENCES shoppers(shopper_id),
  item_id INTEGER REFERENCES products(product_id),
);
