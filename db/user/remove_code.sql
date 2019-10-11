UPDATE users 
SET code = NULL
WHERE phone_number = $1;