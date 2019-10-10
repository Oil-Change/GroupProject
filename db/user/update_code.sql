UPDATE users 
SET code = $2
WHERE phone_number = $1;