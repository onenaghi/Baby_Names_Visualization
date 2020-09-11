-- Drop any existing table 
DROP TABLE IF EXISTS baby_names;

-- Create Table
CREATE TABLE baby_names (
 	id int Primary Key,
	state text,
	sex varchar(1),
	year int,
	name text,
	number int
);

-- View all the Data
select * from baby_names;

--Example - Finding the Top 10 years with most 'Robert's born in Texas
SELECT year, number
FROM baby_names
WHERE name='Robert' and state='TX' and sex='M'
ORDER BY number DESC
LIMIT(10)
;




