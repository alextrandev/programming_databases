/* select database */
use dogdb;
-- ------------------

/* deleting the sample rows */
truncate dog;
-- ---------------------------

/* insert datas */
-- using one statement and format with spaces so it looks nice
-- make no different when running the statement
insert into dog (number, name, birth, breed, weightKg) values 
(1,	'Rex'                    , 1995, 'muddypaw'         , 7 ),
(5,	'Canine The III'         , 1990, 'furry tail-wagger',	13),
(7,	'Hound of Basker W.I.11e', 2011, 'datahound'        ,	20),
(6,	'Gigant Howler'          , 2010, 'watchdog'         ,	10),
(3,	'Spot'                   , 2017, 'spaniel'          ,	15),
(2,	'Barky'                  , 2018, 'bulldog'          ,	25),
(4,	'Grand Duke of S.Q.L'    , 2000, 'lapdog'           ,	1 );
-- -----------------------------------------------------------

/* select data */
-- select all columns
select * from dog;

-- select all but include only 3 columns
select number, weightKg, breed from dog;

-- select with on
select * from dog where breed='bulldog';
select * from dog where breed='spaniel';
select * from dog where breed='lapdog';
-- -------------------------------------

/* update data */
update dog set breed='datahound', weightKg=7 where number=3;
update dog set breed='muddypaw', birth=1990 where number=4;
update dog set breed='watchdog', name='Barky', birth=2012 where number=3;
update dog set breed='furry tail-wagger', name='Spot', birth=2010 where number=1;
-- ------------------------------------------------------------------------------

/* delete data */
delete from dog where number=5;
delete from dog where number=1;
delete from dog where weightKg=10;
delete from dog where name='Grand Duke of S.Q.L' or name='Canine The III';
delete from dog where weightKg=5 or weightKg=45 or birth=1990;
-- -----------------------------------------------------------------------