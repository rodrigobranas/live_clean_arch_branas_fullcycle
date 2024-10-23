create schema branas;

create table branas.product (
	product_id integer,
	description text,
	price numeric
);

insert into branas.product (product_id, description, price) values (1, 'A', 100);
insert into branas.product (product_id, description, price) values (2, 'B', 200);
insert into branas.product (product_id, description, price) values (3, 'C', 400);
