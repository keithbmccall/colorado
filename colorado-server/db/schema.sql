\c colorado

DROP TABLE IF EXISTS colorado;

CREATE TABLE colorado(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	hex1 VARCHAR(20),
	hex2 VARCHAR(20),
	hex3 VARCHAR(20),
	hex4 VARCHAR(20),
	hex5 VARCHAR(20),
	hex6 VARCHAR(20),
	created_at TIMESTAMP
);