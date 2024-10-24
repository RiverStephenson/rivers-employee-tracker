\c postgres
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

\c employee_db

CREATE TABLE department(
id SERIAL PRIMARY KEY,
dep_name VARCHAR(30)
);

CREATE TABLE job_role (
id SERIAL PRIMARY KEY,
title VARCHAR(40) NOT NULL,
salary DECIMAL NOT NULL,
department_id INTEGER NOT NULL,
CONSTRAINT fk_department
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE CASCADE 
);

CREATE TABLE employee (
id SERIAL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
job_role_id INTEGER NOT NULL,
CONSTRAINT fk_job_role
FOREIGN KEY (job_role_id)
REFERENCES job_role(id)
ON DELETE CASCADE,
manager_id INTEGER,
-- CONSTRAINT fk_manager
FOREIGN KEY (manager_id)
REFERENCES employee(id)
ON DELETE SET NULL
);