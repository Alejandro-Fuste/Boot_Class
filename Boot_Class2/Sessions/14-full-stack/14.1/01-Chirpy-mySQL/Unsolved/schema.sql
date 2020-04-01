CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE

  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR (100) NOT NULL,
  chirp VARCHAR (200) NOT NULL
  time DATETIME NOT NULL
);
id, author, chirp, and time