\c colorado

DROP TABLE IF EXISTS colorado;

CREATE TABLE colorado(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	first VARCHAR(40),
	second VARCHAR(40),
	third VARCHAR(40),
	fourth VARCHAR(40),
	fifth VARCHAR(40),
	sixth VARCHAR(40),
	created_at TIMESTAMP
);