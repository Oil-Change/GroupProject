UPDATE appointments
SET pick_up_time = CURRENT_TIMESTAMP, date(now()), now()
    pick_up = true 
WHERE
   id = $1;

SELECT *
FROM appointments
WHERE id = $1;
   