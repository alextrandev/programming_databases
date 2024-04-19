# Databases

Databases system (engine) includes databases handling programs such as manipulating data and manipulating database structure and users etc.

1. Relation databases

- sql language

2. non-relational databases

- NoSql (mongoDB)

## Datastorage usage

`client application`
| (API, for example fetch)
------------------------------- (backend)
`datastorage layer`
| (API, for example SQL)
`database engine`
| (API, read/write disk etc.)
`disk storage` (permanent storage)

## Relational database

### **person** -table

| id  | firstname | lastname | age |
| :-: | --------- | -------- | :-: |
|  1  | 'Matt'    | 'River'  | 20  |
|  2  | 'Mary'    | 'River'  | 25  |
|  3  | 'Matt'    | 'Jones'  | 30  |

## table with csv

```csv
id, firstname, lastname , age
1, Matt, River, 20
2, Mary, River, 25
3, Matt, Jones, 30
```

## table with sql

```SQL
create table person(
    id integer not null primary key,
    firstname varchar(20) not null,
    lastname varchar(30) not null,
    age integer
);
```

```SQL

-- create db and table

drop database if exists persondb;
create database persondb;
show databases;
use persondb;

create table person(
    id integer not null primary key,
    firstname varchar(20) not null,
    lastname varchar(30) not null,
    age integer
);

select * from person;

create table book(
    bookId integer not null primary key,
    title varchar(50) not null,
    price integer not null
);

show create table book;
drop table book;

-- connection betweek 2 tables

create table department(
    departmentId integer not null primary key,
    departmentName varchar(20) not null
);

create table employee(
    employeeId integer not null primary key,
    departmentNumber integer not null
    foreign key (departmentNumber) references department(departmentId)
)

-- add row in to table

insert into person (id, firstname, lastname, age) values (1, 'Matt', 'River', 20);
insert into person (id, age, lastname, firstname) values (2, 25, 'River', 'Mary');
insert into person values (1, 'Matt', 'Jones', 30);
insert into person (id, firstname, lastname) values (4, 'Vera', 'Smith');
insert into person values (5, 'Arthur', 'Harris', null);

-- select from table

select columnlist from tableList where criteria group by columnOrComputedValue having filterCriteria order by sortingCriteria;
select * from person;
select database();
select @@PORT;
select @@hostname;
select lastname, firstname from person;
select distinct lastname,firstname from person order by lastname asc, firstname asc;

-- select with math operator

select count(*) from employee;
select round(avg(salary), 2) from employee;
select truncate(avg(salary), 2) from employee;
select ceil(avg(salary)) from employee;
select floor(avg(salary)) from employee;

-- case in select

select firstname, lastname, salary,
    case
        when salary=(select min(salary) from employee) then 'min'
        when salary=(select max(salary) from employee) then 'max'
        else '-' end as minmax,
    case
        when salary >(select avg(salary) from employee) then 'more than avg'
        else '-' end as note
from employee;

-- group by

select lastname, count(*) as amount from employee
group by lastname;

-- group and sort

select lastname, count(*) as amount from employee
group by lastname
order by amount desc, lastname asc;

-- group sort and limit

select lastname, count(*) as amount from employee
group by lastname having amount>1
order by amount desc, lastname asc;

-- update table

update person set age=10 where id=5;

-- sub query update

update employee,
(select round(avg(salary), 2) as average from employee) as tmp
set employee.salary=tmp.average
where employeeID=9;

-- delete

delete from employee where employeeID=14;
delete from employee where department='admin';

-- join two db

insert into no_salary (employeeID, firstname, lastname)
select employeeID, firstname, lastname from employeedb.employee
where salary is null;

-- send statement as string in php and js

"insert into employee (department, lastname, employeeID, salary, firstname) values (?, ?, ?, ?, ?)"

"insert into employee values (?, ?, ?, ?, ?)"
```
