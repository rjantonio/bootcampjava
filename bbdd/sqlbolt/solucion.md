## SQL Lesson 1: SELECT queries 101

1. Find the title of each film

```sql
SELECT title FROM movies;
```
2. 
```sql
SELECT director FROM movies;
```
3. 
```sql
SELECT title, director FROM movies;
```
4. 
```sql
SELECT title, year FROM movies;
```
5. 
```sql
SELECT * FROM movies;
```
## SQL Lesson 2: Queries with constraints (Pt. 1)
1. 
```sql
SELECT * FROM movies WHERE ID = 6;
```
2. 
```sql
SELECT * FROM movies WHERE YEAR between 2000 and 2010;
```
3. 
```sql
SELECT * FROM movies WHERE YEAR not between 2000 and 2010;
```
4. 
```sql
SELECT title, year FROM movies LIMIT 5;
```
## SQL Lesson 3: Queries with constraints (Pt. 2)
1. 
```sql
SELECT * FROM movies where title like 'Toy Story%';
```
2. 
```sql
SELECT * FROM movies where director = 'John Lasseter';
```
3. 
```sql
SELECT * FROM movies where director != 'John Lasseter';
```
4. 
```sql
SELECT * FROM movies where title like 'wall-%';
```
## SQL Lesson 4: Filtering and sorting Query results
1. 
```sql
SELECT distinct director FROM movies order by 1;
```
2. 
```sql
SELECT * from Movies order by year desc limit 4
```
3. 
```sql
SELECT * from Movies order by title limit 5
```
4. 
```sql
SELECT * from Movies order by title limit 5 offset 5
```
## SQL Review: Simple SELECT Queries
1. 
```sql 
SELECT city, population FROM north_american_cities where country = 'Canada';
```
2. 
```sql 
SELECT city FROM north_american_cities where country = 'United States' order by latitude desc;
```
3. 
```sql 
SELECT *, city FROM north_american_cities where longitude < (select longitude from north_american_cities where city = 'Chicago') order by longitude;
```
4. 
```sql 
SELECT City From north_american_cities where country = 'Mexico' order by population desc limit 2;
```
5. 
```sql 
SELECT City, population From north_american_cities where country = 'United States' order by population desc limit 2 offset 2;
```
## SQL Lesson 6: Multi-table queries with JOINs
1. 
```sql 
SELECT title, domestic_sales, international_sales FROM movies JOIN Boxoffice on movies.id=boxoffice.movie_id;
```
2. 
```sql 
SELECT title, domestic_sales, international_sales FROM movies JOIN Boxoffice b on movies.id=b.movie_id Where b.international_sales > b.domestic_sales;
```
3. 
```sql 
SELECT title FROM movies JOIN Boxoffice b on movies.id=b.movie_id order by rating desc;
```
## SQL Lesson 7: OUTER JOINs
1. 
```sql 
select distinct building from employees;
```
2. 
```sql 
select * from buildings;
```
3. 
```sql 
select distinct role, building_name from buildings b left join employees e on b.building_name = e.building;
```
## SQL Lesson 8: A short note on NULLs
1. 
```sql 
SELECT * FROM employees where building is null;
```
2. 
```sql 
select * from buildings b left join employees e on b.building_name = e.building where building is null;
```
## SQL Lesson 9: Queries with expressions
1. 
```sql 
SELECT *, ((domestic_sales + international_sales) / 1000000) as suma  FROM movies m left join boxoffice b on m.id=b.movie_id;
```
2. 
```sql 
SELECT *, (Rating * 10) as 'Rating%'  FROM movies m left join boxoffice b on m.id=b.movie_id;
```
3. 
```sql 
SELECT * FROM movies where (year % 2 = 0)
```
## SQL Lesson 10: Queries with aggregates (Pt. 1)
1. 
```sql 
SELECT max(years_employed) as Años, * FROM employees;
```
2. 
```sql 
SELECT *, avg(years_employed) as media from employees group by role;
```
3. 
```sql 
SELECT *, sum(years_employed) as Total from employees group by building;
```
## SQL Lesson 11: Queries with aggregates (Pt. 2)
1. 
```sql

```
2. 
```sql

```
3. 
```sql

```
