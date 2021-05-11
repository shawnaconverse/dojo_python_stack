-- CRUD
-- Create - INSERT
-- Read - SELECT
-- Update - UPDATE
-- Delete - DELETE

use lecture_schema;

-- INSERT

-- INSERT INTO <table_name> (<column_names>, ) VALUES (<value_for_column>);
-- convention is all SQL commands are all caps
-- INSERT INTO users (first_name, last_name, email, created_at, updated_at)
-- VALUES ("Shawn", "Converse", "sc@dojo.com", NOW(), NOW()); 
INSERT INTO users (first_name, last_name, email, created_at, updated_at)
VALUES ("Jim", "Reeder", "jr@dojo.com", NOW(), NOW()),
	('Tyler', "Thibault", "tt@dojo.com",  NOW(), NOW()),
	("Edward", "Im", "ei@dojo.com", NOW(), NOW()),
	("Brendan", "Stanton", "bs@dojo.com", NOW(), NOW());

INSERT INTO items (name, description, created_at, updated_at)
VALUES ("ball", "a rubber ball", NOW(), NOW()),
	("Animal Action Figure", "Giraffes don't exist", NOW(), NOW()),
    ("Toilet Trees", "plants that go in the bathroom", NOW(), NOW()),
    ("B", "A bear without an ear", NOW(), NOW()),
    ("Super Awesome Man Guy", "Eats all his vegetables", NOw(), NOW());

-- what about tables with Forgein Keys

-- One to One / One to Many
INSERT INTO addresses (user_id, street, city, state, zip_code, created_at, updated_at)
VALUES (1, "123 Shawn Street", "San Jose", "CA", "44444", NOW(), NOW()),
	(2, "123 Jim Street", "Seattle", "WA", 55555, NOW(), NOW()),
	(3, "123 Tyler Street", "Seattle", "WA", 66666, NOW(), NOW());

INSERT INTO orders (user_id, amount, created_at, updated_at)
VALUES (1, 255.55, NOW(), NOW()),
	(1, 130.92, NOW(), NOW()),
	(2, 239.73, NOW(), NOW()),
	(2, 89.90, NOW(), NOW()),
	(3, 241.94, NOW(), NOW()),
	(3, 75.76, NOW(), NOW());

-- Many to Many
INSERT INTO orders_items (order_id, item_id, created_at, updated_at)
VALUES (1, 1, NOW(), NOW()),
	(1, 2, NOW(), NOW()),
    (3, 2, NOW(), NOW()),
    (1, 3, NOW(), NOW()),
	(2, 1, NOW(), NOW()),
	(3, 1, NOW(), NOW()),
	(3, 5, NOW(), NOW());


-- SELECT
-- SELECT <what columns to grab> FROM <which_table>;
-- * means grab all columns
SELECT * FROM users;
SELECT first_name, last_name FROM users;
SELECT street, city FROM addresses;

-- WHERE command to grab based on a condition

SELECT * FROM users WHERE id = 2;
SELECT * FROM users WHERE id > 1;
SELECT * FROM users WHERE id <> 2; -- <> means not equal, != works too
SELECT * FROM users WHERE first_name LIKE "J%"; -- grab all users with a first name that starts with J

-- sort data using ORDER BY

SELECT * FROM users ORDER BY last_name DESC;

SELECT * FROM users
WHERE id > 2
ORDER BY last_name DESC;


-- UPDATE
-- UPDATE <table_name> SET <column1> = <value1>, <column2> = <value2> WHERE condition;

UPDATE users SET first_name = "Eddy", email = "awesomeguy@dojo.com", updated_at = NOW()
WHERE id = 3;

UPDATE items SET name = "hand ball", updated_at = NOW()
WHERE id = 1;

-- DELETE
-- DELETE FROM <table_name> WHERE condition;

DELETE FROM items WHERE id = 4;

DELETE FROM orders_items WHERE order_id = 1 AND item_id = 3;

-- FUNCTIONS

-- SELECT first_name, last_name FROM users; 
SELECT CONCAT(first_name, " ", last_name) AS full_name FROM users;

SELECT LENGTH(last_name) AS last_len FROM users;

SELECT LOWER(first_name) as first_lower FROM users;

SELECT HOUR(created_at) as created_hour FROM users;












