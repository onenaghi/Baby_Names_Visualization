-- Drop any existing table 
DROP TABLE IF EXISTS baby_names;

-- Create Table
CREATE TABLE baby_names (
 	id int unique,
	state text,
	sex varchar(1),
	year int,
	name text,
	number int,
);

select * from baby_names;