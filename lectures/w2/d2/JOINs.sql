
-- This query will give me the ninjas that belong to dojo #10
-- but i dont have access to any of the dojo information
-- SELECT * from ninjas
-- WHERE dojo_id = 10;

-- 1 to 1
-- I want the first name, last, name, and city for each user

SELECT users.first_name, users.last_name, addresses.city FROM users
JOIN addresses ON users.id = addresses.user_id;

SELECT users.id, users.email, users.first_name, addresses.street, addresses.state FROM users
JOIN addresses ON users.id = addresses.user_id;

SELECT * FROM users;
SELECT * FROM addresses;

-- 1 to many

SELECT * FROM users
JOIN orders ON users.id = orders.user_id;

-- Many to Many
SELECT * FROM orders
JOIN orders_items ON orders.id = orders_items.order_id
JOIN items ON items.id = orders_items.item_id;
WHERE orders.id = 3
ORDER BY orders.id DESC
LIMIT 1;


-- LEFT JOIN
-- allow us to grab all data from the "LEFT" table even if there are no results
-- in the joining table

SELECT users.first_name, users.last_name, addresses.city FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;

SELECT * FROM orders
LEFT JOIN orders_items ON orders.id = orders_items.order_id
LEFT JOIN items ON items.id = orders_items.item_id;



SELECT * FROM users
JOIN orders ON users.id = orders.user_id
JOIN orders_items ON orders.id = orders_items.order_id
JOIN items ON items.id = orders_items.item_id;


SELECT * FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.id = 5;


