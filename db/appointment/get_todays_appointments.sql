SELECT *
FROM appointments a
JOIN users u ON a.user_id = u.phone_number
JOIN cars c ON  a.car_id = c.id
where date(now()) = appointment