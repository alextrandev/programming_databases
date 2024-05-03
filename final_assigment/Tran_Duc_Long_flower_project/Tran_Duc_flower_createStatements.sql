/* create database */
-- drop first to prevent error
drop database if exists flowerdb;
create database flowerdb;
-- ------------------------------

/* select database */
use flowerdb;
-- ------------------

/* create table */
create table flower (
  flowerId integer not null primary key,
  name varchar(31) not null,
  site varchar(11) not null,
  stock integer not null,
  unitPrice integer not null
) COLLATE=utf8mb4_unicode_ci;
-- -------------------------------------

/* insert sample rows */
insert into flower values (1, 'Rose', 'garden', 50, 5);
insert into flower values (2, 'Lavender', 'vase', 20, 9);
-- ------------------------------------------------------

/* create an user and grant privileges */
drop user if exists 'jack'@'localhost';
create user 'jack'@'localhost' identified by 'fDCirWRI';
grant all privileges on flowerdb.* to 'jack'@'localhost';
-- ------------------------------------------------------