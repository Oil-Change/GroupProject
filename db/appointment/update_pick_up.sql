UPDATE appointments
SET pick_up_time = $2,
    pick_up = $3 
WHERE
   id = $1;
   