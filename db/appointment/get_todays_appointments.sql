SELECT *
FROM appointments a
JOIN users u ON a.user_id = u.id
JOIN cars c ON  a.car_id = c.car_id
WHERE DATE(appointment) = DATE(now());