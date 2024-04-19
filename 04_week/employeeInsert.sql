use employeedb;

insert into employee (employeeID, firstname, lastname, department, salary)
values (4, 'Amanda', 'Jones', 'transportation', 3000);

insert into employee (employeeID, firstname, lastname, salary)
values (5, 'Arthur', 'Harris', 2500);

insert into employee (employeeID, firstname, lastname, department)
values (6, 'Vera', 'Smith', 'marketing');

insert into employee (employeeID, firstname, lastname, department, salary)
values (7, 'Mary Ann', 'Smith', 'ict', 3500);

insert into employee (employeeID, firstname, lastname, department, salary)
values (8, 'Mary-Ann', 'Wilkes', 'admin', 7000);

insert into employee values (9, 'Luke', 'Walker', null, null);

insert into employee (department, lastname, employeeID, salary, firstname) values ('ict', 'Brown', 10, 4000, 'Olivia');

insert into employee (employeeID, firstname, lastname, department, salary)
values (11, 'Arthur', 'Green', 'ict', 2500);

insert into employee (employeeID, firstname, lastname, department, salary)
values (12, 'John', 'Green', 'marketing', 1000);

insert into employee (employeeID, firstname, lastname, department, salary)
values (13, 'Amanda', 'Green', 'admin', 4000);

-- "insert into employee (department, lastname, employeeID, salary, firstname) values (?, ?, ?, ?, ?)";
-- "insert into employee values (?, ?, ?, ?, ?)"