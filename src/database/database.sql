CREATE DATABASE openpantry;

CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);


ADD COLUMN item_name(
    SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
