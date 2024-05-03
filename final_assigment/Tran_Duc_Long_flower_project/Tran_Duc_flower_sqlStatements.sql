/* select database */
use flowerdb;
-- ------------------

/* deleting the sample rows */
truncate flower;
-- ---------------------------

/* insert datas */
-- using one statement and format with spaces so it looks nice
-- make no different when running the statement
insert into flower (flowerId, name, site, stock, unitPrice) values 
(2,	'lily-of-the-valley', 'rocky'      , 20 , 6 ),
(4,	'violet'            , 'sunny'      , 30 ,	10),
(7,	'rose'              , 'shady'      , 25 ,	5 ),
(5,	'marigold'          , 'garage'     , 15 ,	4 ),
(6,	'toadstool'         , 'bucket'     , 100,	7 ),
(3,	'tulip'             , 'swamp'      , 7  ,	3 ),
(1,	'mushroom'          , 'half shadow', 150,	9 );
-- ---------------------------------------------------------------

/* select data */
-- select all columns
select * from flower;

-- select all but include only 3 columns
select name, site, unitPrice from flower;

-- select with on
select * from flower where unitPrice=6;
select * from flower where unitPrice=5;
select * from flower where stock=1;
-- -------------------------------------

/* update data */
update flower set unitPrice=10, name='toadstool' where flowerId=2;
update flower set unitPrice=9, stock=1 where flowerId=6;
update flower set unitPrice=10, stock=5, site='swamp' where flowerId=6;
update flower set unitPrice=4, stock=1, site='half shadow' where flowerId=5;
-- -------------------------------------------------------------------------

/* delete data */
delete from flower where flowerId=1;
delete from flower where flowerId=2;
delete from flower where unitPrice=8;

-- the task asked for 'and' condition instead of 'or' so the stmt cannot match any row
delete from flower where site='swamp' and stock=100;
delete from flower where name='toadstool' and site='bucket' and unitPrice=7;

-- here is the same stmt with 'or' condition in case it is mispelled
delete from flower where site='swamp' or stock=100;
delete from flower where name='toadstool' or site='bucket' or unitPrice=7;
-- -----------------------------------------------------------------------------------