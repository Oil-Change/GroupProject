CREATE TABLE "users" (
  "phone_number" TEXT PRIMARY KEY,
  "first_name" VARCHAR(40),
  "last_name" VARCHAR(40),
  "street" VARCHAR(200),
  "city" VARCHAR(50),
  "state" VARCHAR(2),
  "zip" INTEGER,
  "email" VARCHAR(50),
  "is_admin" BOOLEAN
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "user_id" TEXT REFERENCES users(phone_number),
  "license_plate" VARCHAR(20),
  "make" VARCHAR(20),
  "model" VARCHAR(30),
  "year" INTEGER,
  "trim" VARCHAR(20),
  "mileage" INTEGER,
  "color" VARCHAR(50)
);

CREATE TABLE "appointments" (
  "id" SERIAL PRIMARY KEY,
  "user_id" TEXT REFERENCES users(phone_number),
  "car_id" INTEGER REFERENCES cars(id),
  "appointment" DATE,
  "pick_up_time" DATE,
  "pick_up" BOOLEAN,
  "drop_off_time" DATE,
  "drop_off" BOOLEAN,
  "price" NUMERIC,
  "charged_date" DATE
);

CREATE TABLE "messages" (
  "id" SERIAL PRIMARY KEY,
  "room_id" INTEGER REFERENCES appointments(id),
  "message" TEXT,
  "user_name" VARCHAR(100),
  "is_admin" BOOLEAN
);