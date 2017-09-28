\copy grocery_items(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (shopper_name) VALUES ('New Money')
INSERT INTO shoppers (shopper_name) VALUES ('Thug Life')
INSERT INTO shoppers (shopper_name) VALUES ('Cryptonymous')
INSERT INTO shoppers (shopper_name) VALUES ('Stuck in Phase 2')
INSERT INTO shoppers (shopper_name) VALUES (`Murphy's Law`)

INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id VALUES (2);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (5);
INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id) VALUES (2);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (5);
INSERT INTO orders (shopper_id) VALUES (5);

INSERT INTO cart (id, item_id) VALUES (1, 31);
INSERT INTO cart (id, item_id) VALUES (1, 12);
INSERT INTO cart (id, item_id) VALUES (2, 6);
INSERT INTO cart (id, item_id) VALUES (2, 14);
INSERT INTO cart (id, item_id) VALUES (3, 5);
INSERT INTO cart (id, item_id) VALUES (3, 2);
INSERT INTO cart (id, item_id) VALUES (4, 32);
INSERT INTO cart (id, item_id) VALUES (4, 18);
INSERT INTO cart (id, item_id) VALUES (5, 17);
INSERT INTO cart (id, item_id) VALUES (5, 9);
INSERT INTO cart (id, item_id) VALUES (6, 14);
INSERT INTO cart (id, item_id) VALUES (6, 27);
INSERT INTO cart (id, item_id) VALUES (7, 15);
INSERT INTO cart (id, item_id) VALUES (7, 1);
INSERT INTO cart (id, item_id) VALUES (8, 32);
INSERT INTO cart (id, item_id) VALUES (8, 25);
INSERT INTO cart (id, item_id) VALUES (9, 11);
INSERT INTO cart (id, item_id) VALUES (9, 16);
INSERT INTO cart (id, item_id) VALUES (10, 19);
INSERT INTO cart (id, item_id) VALUES (10, 29);