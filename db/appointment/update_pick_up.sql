UPDATE appointments
SET pick_up_time = DATE(now()),
    pick_up = true 
WHERE
   id = $1;

SELECT *
FROM appointments
WHERE id = $1;
   