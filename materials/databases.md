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

### add row in to table

insert into person (id, firstname, lastname, age) values (1, 'Matt', 'River', 20);
insert into person (id, age, lastname, firstname) values (2, 25, 'River', 'Mary');
insert into person values (1, 'Matt', 'Jones', 30);
insert into person (id, firstname, lastname) values (4, 'Vera', 'Smith');
insert into person values (5, 'Arthur', 'Harris', null);

### select from table

select columnlist from tableList where criteria group by columnOrComputedValue having filterCriteria order by sortingCriteria;
select * from person;
select database();
select @@PORT;
select @@hostname;
select lastname, firstname from person;
select distinct lastname,firstname from person order by lastname asc, firstname asc;

update person set age=10 where id=5;

```
