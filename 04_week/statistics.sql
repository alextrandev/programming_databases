drop database if exists statistics;
create database statistics;

use statistics;

create table no_salary(
    employeeID integer not null primary key,
    firstname varchar(30),
    lastname varchar(30)
);

create table missing(
    id integer,
    name varchar(20)
);

insert into no_salary (employeeID, firstname, lastname)
select employeeID, firstname, lastname from employeedb.employee
where salary is null;

insert into missing (id, name)
select employeeID,firstname from employeedb.employee
where salary is null;