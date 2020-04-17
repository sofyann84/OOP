CREATE TABLE users(
    id_login varchar(50) primary key ,
    username varchar(50),
    passwords VARCHAR(50),
    users VARCHAR (50)
);

INSERT INTO users (id_login, username, passwords, users) 
values (1 , 'sofyan', 'password123', 'ADMIN'); 