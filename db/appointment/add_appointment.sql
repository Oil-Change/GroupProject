INSERT INTO appointments
(user_id, car_id, appointment, price, charged)
VALUES($1, $2, $3, $4, $5)
RETURNING *;