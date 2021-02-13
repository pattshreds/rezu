CREATE DATABASE rezu;

CREATE TABLE reviews(
  review_id SERIAL PRIMARY KEY, username VARCHAR(40), product_name VARCHAR(50), product_image VARCHAR(400), review VARCHAR(1000)
);
