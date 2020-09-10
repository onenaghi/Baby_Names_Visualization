-- Drop any existing table 
DROP TABLE IF EXISTS baby_names;

-- Create Table
CREATE TABLE baby_names (
 	id  serial  primary key ,
	state text,
	Sex text,
	year bigint,
	name text,
	number bigint
);

select * from baby_names;