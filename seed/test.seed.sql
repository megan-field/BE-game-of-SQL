DROP DATABASE IF EXISTS test_game_of_sql;
CREATE DATABASE test_game_of_sql;

\c test_game_of_sql;

CREATE TABLE houses (
  id SERIAL PRIMARY KEY, 
  house_name VARCHAR (30) NOT NULL, 
  sigil_img VARCHAR(2083),
  words TEXT NOT NULL,
  seat VARCHAR(50), 
  region VARCHAR(50)
);

CREATE TABLE religions (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  god VARCHAR (50)
);

CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR (30) NOT NULL,
  picture_url VARCHAR (2083),
  dead BOOLEAN NOT NULL,
  house_id INT NOT NULL,
  religion_id INT,
  FOREIGN KEY (house_id) REFERENCES houses(id),
  FOREIGN KEY (religion_id) REFERENCES religions(id)
);

INSERT INTO houses (house_name, sigil_img, words, seat, region)
  VALUES ('Stark', 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142', 'Winter is Coming', 'Winterfell', 'The North'), ('Lannister','http://tu9srvbirvvtmjikdmlnbmv0dguud2lraweubm9jb29rawuubmv0.g00.wikia.com/g00/2_Z2FtZW9mdGhyb25lcy53aWtpYS5jb20%3D_/TU9SRVBIRVVTMjIkaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvZ2FtZW9mdGhyb25lcy9pbWFnZXMvOC84YS9Ib3VzZS1MYW5uaXN0ZXItTWFpbi1TaGllbGQuUE5HL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE3MDEwMTA5NTM1NyZpMTBjLm1hcmsuaW1hZ2UudHlwZQ%3D%3D_$/$/$/$/$/$/$/$', 'Hear me roar', 'Casterly Rock', 'The Westerlands');

INSERT INTO religions (name, type, god)
VALUES ('Old Gods of the Forest', 'animistic', null), ('Faith of the Seven', 'monotheistic', 'The Seven');

INSERT INTO people (name, picture_url, dead, house_id, religion_id)
  VALUES ('Ned Stark', 'https://upload.wikimedia.org/wikipedia/en/5/52/Ned_Stark-Sean_Bean.jpg', true, 1, 1),('Catelyn Stark', 'https://upload.wikimedia.org/wikipedia/en/2/25/Catelyn_Stark-Michelle_Fairley_S3.jpg', true, 1, 2);