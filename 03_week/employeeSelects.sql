use employeedb;

-- query select

select * from employee;
select firstname, lastname, department from employee;
select *  from employee where department is not null;
select firstname, lastname  from employee where department is null;
select firstname, lastname from employee where department is null and salary is null;
select firstname, lastname, department, salary from employee where department is null or salary is null;

-- query select count

select count(*) from employee;
select count(*) as numberOfRows from employee where department is null or salary is null;

select count(salary) as lessThen5000 from employee where salary<5000;
select min(salary) as minSalary from employee;
select max(salary) as maxSalary from employee;
select max(salary) - min(salary) as salaryDifferent from employee;
select sum(salary) as totalSalary from employee;
select avg(salary) as averageSalary from employee;
select round(avg(salary), 2) as avgSalary from employee;

-- select like (% mean any number of char, _ mean any one char.)

select * from employee where firstname like 'M%';
select * from employee where firstname like '%Ann';
select * from employee where firstname like '%d_';