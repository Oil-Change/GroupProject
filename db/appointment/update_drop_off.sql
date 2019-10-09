UPDATE appointments
SET drop_off_time = $2,
    drop_off = $3,
WHERE
   id = $1;