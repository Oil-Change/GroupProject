INSERT INTO cars 
(user_id, make, model, trim, year, color, license_plate, mileage)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;