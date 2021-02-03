CREATE DATABASE perntodo;

CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE todo (
    id SERIAL NOT NULL PRIMARY KEY,
    created_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_date TIMESTAMPTZ,
    state VARCHAR (50),
    status VARCHAR (50),
    title VARCHAR (255),
    description VARCHAR (255)
);

CREATE
OR REPLACE FUNCTION trigger_set_timestamp() RETURNS TRIGGER AS $ $ BEGIN NEW.updated_at = NOW();

RETURN NEW;

END;

CREATE TRIGGER set_timestamp BEFORE
UPDATE
    ON todos FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();