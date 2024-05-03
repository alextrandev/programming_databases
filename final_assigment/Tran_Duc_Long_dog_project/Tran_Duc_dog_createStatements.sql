-- create database
drop database if exists dogdb;
create database dogdb;

-- select database
use dogdb;

-- create table
create table dog (
  number integer not null primary key,
  name varchar(41) not null,
  birth int not null,
  breed varchar(30)  not null,
  weightKg int not null
) COLLATE=utf8mb4_unicode_ci;

-- insert sample rows
insert into dog values (1, 'Pluto', 2000, 'bulldog', 15);
insert into dog values (2, 'Mimi', 2005, 'Shiba Inu', 8);

-- create an user and grant privileges
drop user if exists 'sophie'@'localhost';
create user 'sophie'@'localhost' identified by 'zAxIiT3h';
grant all privileges on dogdb.* to 'sophie'@'localhost';