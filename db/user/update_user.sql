UPDATE users
SET first_name = $2,
    last_name = $3,
    street = $4,
    city = $5,
    state = $6,
    zip = $7,
    email = $8
WHERE phone_number = $1;

SELECT *
FROM users
WHERE phone_number = $1;
