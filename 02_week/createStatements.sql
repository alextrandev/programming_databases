show databases;

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


create table book(
    bookId integer not null primary key,
    title varchar(50) not null,
    price integer not null
);

show create table book;

drop table book;

insert into person (id, firstname, lastname, age) values (1, 'Matt', 'River', 20);
insert into person (id, age, lastname, firstname) values (2, 25, 'River', 'Mary');
insert into person values (1, 'Matt', 'Jones', 30);
insert into person (id, firstname, lastname) values (4, 'Vera', 'Smith');
insert into person values (5, 'Arthur', 'Harris', null);

-- select columnlist from tableList where criteria group by columnOrComputedValue having filterCriteria order by sortingCriteria;


select * from person;
select database();
select @@PORT;
select @@hostname;
select lastname, firstname from person;
select distinct lastname,firstname from person order by lastname asc, firstname asc;
select firstname,age from person where age>20 and age >50;

update person set age=10 where id=5;