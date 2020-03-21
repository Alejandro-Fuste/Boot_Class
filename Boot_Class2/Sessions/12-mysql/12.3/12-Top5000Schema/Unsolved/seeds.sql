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

INSERT INTO Top5000 (id, artist, song_title, year, score_total, score_us, score_uk, score_europe,score_world)
VALUES (1,'Bing Crosby','White Christmas',1942,39.903,23.929,5.7,2.185,0.54), (2,'Bill Haley & his Comets','Rock Around the Clock',1955,36.503,19.961,7.458,5.663,0.76), (3,'Celine Dion','My Heart Will Go On',1998,35.405,12.636,8.944,23.701,3.61) ;