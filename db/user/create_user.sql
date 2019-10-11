INSERT INTO users
(phone_number)
VALUES
($1)
RETURNING *;