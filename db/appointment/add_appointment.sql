INSERT INTO appointments
(user_id, car_id, appointment, price, charged_date)
VALUES($1, $2, $3, $4, DATE(now()))
RETURNING *;