# Docker

create a new mysql container

```shell
docker run --name my_mysql*any name* -e MYSQL_ROOT_PASSWORD=*passwordHere* -p 3333:3306 -d mysql:latest
```

to start the image again

```shell
docker start my_mysql
```

go into container shell

```shell
docker exec -it my_mysql bash
```

run in the container shell

```shell
mysql -u root -p
```

```shell
docker run --name my_mysql -e MYSQL_ROOT_PASSWORD=password -p 3333:3306 -v /Users/s2400074/Documents/programing_databases -d mysql:latest
```

```shell
mysql -u root -p <createStatement.sql
```
