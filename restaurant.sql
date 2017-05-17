CREATE TABLE restaurant (
id SERIAL NOT NULL PRIMARY KEY,
name VARCHAR,
address VARCHAR,
category VARCHAR);

CREATE TABLE reviewer (
id SERIAL NOT NULL PRIMARY KEY,
name VARCHAR,
email VARCHAR,
karma INTEGER CHECK (karma>=0 AND karma <=7));

CREATE TABLE review (
reviewer_id INTEGER REFERENCES reviewer (id),
stars INTEGER CHECK (stars > 0 AND stars <=5),
title VARCHAR,
review VARCHAR,
restaurant_id INTEGER REFERENCES restaurant (id));
