select employeedb;

update employee set department='ict',
salary=(select round(avg(salary), 2))
where employeeID=3;
-- not working

update employee set salary=4000 where employeeID=6;