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
insert into person(id, firstname, lastname, age)
values (1, 'Matt', 'River', 20);
```
