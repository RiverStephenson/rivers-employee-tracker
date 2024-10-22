\c postgres
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

\c employee_db

CREATE TABLE department(
id SERIAL PRIMARY KEY,
dep_name VARCHAR(30)
);

CREATE TABLE job_role (
id SERIAL PRIMARY KEY.
title VARCHAR(40) NOT NULL,
salary DECIMAL NOT NULL,
department_id INTEGER NOT NULL
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE SET NULL
);

CREATE TABLE employees (
id SERIAL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
job_role_id INTEGER NOT NULL
manager_id INTEGER
);