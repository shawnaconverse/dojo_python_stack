-- query a set of instructions written in SQL
-- 4 basic commands
-- SQL convention is that all SQL commands are in all caps
-- all queries MUST end in a semi colon

-- CRUD: Create, Read, Update, Delete


-- Create
-- SQL command: INSERT
-- this command adds data to the database
-- INSERT INTO <name of table> (<fieldname1>, <fieldname2>) VALUES (<fieldvalue1>, <fieldvalue2>);
-- id field is auto generated for us,  assuming we checked off auto increment
-- MUST provide data for created_at and updated_at. NOW() function works fine.

INSERT INTO users (first_name, last_name, email, created_at, updated_at)
VALUES ("Shawn", "Converse", "sc@dojo.com", NOW(), NOW()); 

INSERT INTO users (first_name, last_name, email, created_at, updated_at)
VALUES ('Jim', 'Reeder', 'jm@dojo.com', NOW(), NOW()),
	('Tyler', 'Thibault', 'tt@dojo.com', NOW(), NOW()), 
	('Edward', 'Im', 'ei@dojo.com', NOW(), NOW()),
    ('Brendan', 'Stanton', "bs@dojo.com", NOW(), NOW());

INSERT INTO items (name, description, created_at, updated_at)
VALUES ("ball", "a rubber ball", NOW(), NOW()),
	("Animal Action Figure", "Giraffes don't exist", NOW(), NOW()),
	("Toilet Trees", "plants that go in the bathroom", NOW(), NOW()),
	("B", "A Bear without an ear", NOW(), NOW()),
	("Super Awesome Man Guy", "Eats all his vetegables", NOW(), NOW());

-- INSERT with 1 to 1 and 1 to many

INSERT INTO addresses (user_id, street, city, state, zip_code, created_at, updated_at)
VALUES (1, "123 Shawn Street", "San Jose", "CA", 44444, NOW(), NOW()),
	(2, "123 Jim Street", "Seattle", "WA", 55555, NOW(), NOW()),
	(3, "123 Tyler Street", "Seattle", "WA", 66666, NOW(), NOW());
    
INSERT INTO orders (user_id, amount, created_at, updated_at)
VALUES (1, 255.55, NOW(), NOW()),
	(1, 140.92, NOW(), NOW()),
	(2, 239.73, NOW(), NOW()),
	(2, 89.90, NOW(), NOW()),
	(3, 241.94, NOW(), NOW()),
	(3, 75.76, NOW(), NOW());

-- INSERT INTO many to many join table

INSERT INTO orders_items (order_id, item_id, created_at, updated_at)
VALUES (1, 1, NOW(), NOW()),
	(1, 2, NOW(), NOW()),
	(1, 3, NOW(), NOW()),
	(2, 1, NOW(), NOW()),
	(3, 1, NOW(), NOW()),
	(3, 5, NOW(), NOW());


-- READ
-- SQL command: SELECT
-- SELECT <what fields to grab> FROM <table name>

SELECT * FROM users; -- star or wild character. means to grab all fields
SELECT first_name, last_name FROM users;
SELECT street, city FROM addresses;

-- WHERE command to get data based on a condition
SELECT * FROM users WHERE first_name LIKE "S%" OR id > 3; -- we are look for only first names that start with captial S
SELECT * FROM users WHERE id = 3;
SELECT * FROM users WHERE id > 2;

-- ORDER BY
-- default order is ascending, we can use DESC to start with the great value
SELECT * FROM users ORDER BY first_name; 
SELECT * FROM users ORDER BY first_name DESC; 

-- we can combine mutiple commands together
SELECT * FROM users
WHERE id > 2
ORDER BY last_name;

-- UPDATE
-- SQL command: UPDATE
-- UPDATE <table name> SET <fieldname> = <fieldvalue>, <fieldname> = <fieldvalue> WHERE id = <value>;
SELECT * FROM users;
UPDATE users SET email = "jr@dojo.com", updated_at = NOW() WHERE id = 2;

SELECT * FROM orders;
UPDATE orders SET amount = 999.99, updated_at = NOW() WHERE id = 1;


-- DELETE
-- SQL command: DELETE
-- DELETE FROM <tablename> WHERE id = <value>;
SELECT * FROM orders_items;
DELETE FROM orders WHERE id = 9;


-- FUNCTIONS
-- NOW()
-- don't need to memorize functions, we can always look up functions
-- AS command allows us to rename fields to something else

SELECT CONCAT(first_name, " ", last_name) AS full_name FROM users;
SELECT LOWER(first_name) FROM users;
SELECT id, CASE WHEN id %2 != 0 then "odd" else "even" end AS results FROM users WHERE results = "odd";







