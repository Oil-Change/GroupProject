SELECT *
FROM appointments
WHERE appointment = to_timestamp($1)