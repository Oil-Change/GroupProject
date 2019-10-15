UPDATE appointments
SET drop_off_time = DATE(now()),
    drop_off = true
WHERE
   id = $1;