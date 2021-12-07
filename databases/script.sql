create database trafico;

use trafico;

create table form (
	name varchar(255),
    email varchar(255),
    message varchar(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);