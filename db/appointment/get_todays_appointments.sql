SELECT a.id as appointment_id, *
FROM appointments a
JOIN users u ON a.user_id = u.phone_number
JOIN cars c ON  a.car_id = c.id
WHERE date(now()) = appointment