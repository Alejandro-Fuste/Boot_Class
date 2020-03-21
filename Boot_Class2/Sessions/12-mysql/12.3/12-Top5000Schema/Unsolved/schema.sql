DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000 (
  position INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(45) NOT NULL,
  song_title VARCHAR(100) NOT NULL,
  year INTEGER,
  score_total DECIMAL(10,4),
  score_us DECIMAL(10,4),
  score_uk DECIMAL(10,4),
  score_europe DECIMAL(10,4),
  score_world DECIMAL(10,4),
  PRIMARY KEY(position)
  
);

