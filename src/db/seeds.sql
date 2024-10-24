\c employee_db

INSERT INTO department 
    (dep_name)      
VALUES
    ('Software'),
    ('Mechanics'),
    ('Security'),
    ('Engineering');

INSERT INTO
    job_role (title, salary, department_id)
VALUES
    ('Software Engineer Intern', 55000, 1),
    ('Software Quality Engineer', 120000, 1),
    ('Full Stack Software Engineer', 127000, 1),
    ('Devops Engineer', 146000, 1),
    ('Lead Software Engineer', 157000, 1),
    ('Software Engineering Manager', 180000, 1),
    ('Manufacturing Planner', 80000, 2),
    ('Manufacturing Engineer', 92000, 2),
    ('Mechanical Engineer', 147000, 2),
    ('Mechanical Enineering Manager', 172000, 2),
    ('Security Intern', 41000, 3),
    ('Systems Security Engineer', 134000, 3),
    ('CyberSecurity Manager', 156000, 3),
    ('Senior Analyst', 122000, 4),
    ('Systems Architect', 254000, 4),
    ('Lead Systems Engineer', 161000, 4),
    ('Systems Engineering Manager', 172000, 4);
INSERT INTO
    employee (first_name, last_name, job_role_id, manager_id)
VALUES
    ('Sharlene', 'Dunn', 2, 8),
    ('Norberto', 'Boyle', 3, 8),
    ('Marcelino', 'Frost', 1, 8),
    ('Fern', 'Costa', 1, 8),
    ('Virgil', 'Phillips', 4, 8),
    ('Margarete', 'Lester', 4, 8),
    ('Stanford', 'Cooley', 5, 8),
    ('Conrad', 'Williams', 6, null),
    ('Omer', 'House', 7, 16),
    ('Jarret', 'Smith', 8, 16),
    ('Darlene', 'Lozano', 7, 16),
    ('Alan', 'Wise', 8, 16),
    ('Emilee', 'Sheldon', 9, 16),
    ('Donn', 'Vasquez', 9, 16),
    ('Ivan', 'Henry', 9, 16),
    ('Sonny', 'George', 10, null),
    ('William', 'Stafford', 11, 20),
    ('Don', 'Juarez', 11, 20),
    ('Violet', 'Golden', 12, 20),
    ('Marcus', 'Knox', 13, null),
    ('Beth', 'Bradshaw', 14, 26),
    ('Melinda', 'Ross', 14, 26),
    ('Louis', 'Miranda', 15, 26),
    ('Vicky', 'Carter', 15, 26),
    ('Gus', 'Humphrey', 16, 26),
    ('Silas', 'Rios', 17, null);