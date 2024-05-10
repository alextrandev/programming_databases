drop database if exists employeedb;
create database employeedb;

create table employeedb.employee(
    employeeID integer not null primary key,
    firstname varchar(20) not null,
    lastname varchar(30) not null,
    department varchar(15),
    salary decimal(6,2)
);

drop user if exists 'user'@'localhost';
create user 'user'@'localhost' identified by 'user';
grant all privileges on employeebd.* to 'user'@'localhost';

-- exit; and then login as user with mysql -u user -p; need to enter password.

insert into employeedb.employee values(1, 'Matt', 'River', 'ict', 4000);
insert into employeedb.employee values(2, 'Mary', 'River', 'admin', 6000);
insert into employeedb.employee (employeeID, firstname, lastname) values (3, 'Vera', 'Jones');

use employeedb;
