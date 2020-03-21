DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000 (
  position INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(100) NOT NULL,
  song_title VARCHAR(100) NOT NULL,
  year INTEGER,
  score_total DECIMAL(10,4),
  score_us DECIMAL(10,4),
  score_uk DECIMAL(10,4),
  score_europe DECIMAL(10,4),
  score_world DECIMAL(10,4),
  PRIMARY KEY(position)
  
);

CREATE TABLE top_albums (
  position INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(100) NOT NULL,
  album VARCHAR(100) NOT NULL,
  year INTEGER,
  raw_total DECIMAL(10,4),
  raw_us DECIMAL(10,4),
  raw_uk DECIMAL(10,4),
  raw_europe DECIMAL(10,4),
  raw_world DECIMAL(10,4),
  PRIMARY KEY(position)
  
);

SELECT * FROM Top5000;
SELECT * FROM top_albums;

