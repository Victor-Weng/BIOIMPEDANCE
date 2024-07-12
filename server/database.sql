CREATE DATABASE bioimpedance;

CREATE TABLE bio(
    bio_id SERIAL PRIMARY KEY,
    location VARCHAR(255),
    size NUMERIC(15, 7),
    depth NUMERIC(5, 4),
    frequency NUMERIC(15, 0),
    phase NUMERIC(15, 5)[],
    impedance NUMERIC(15, 5)[]
);