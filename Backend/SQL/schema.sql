-- CREATE TABLE user(
--     id VARCHAR(50) PRIMARY KEY,
--     username VARCHAR(30) UNIQUE,
--     email VARCHAR(40) UNIQUE NOT NULL,
--     password VARCHAR(8) NOT NULL
-- );

ALTER TABLE user
CHANGE COLUMN password password VARCHAR(30) NOT NULL;