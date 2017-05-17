CREATE TABLE artist (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE song_writer (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE album (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  artist_id INTEGER REFERENCES artist (id)
);

CREATE TABLE song (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  album_id INTEGER REFERENCES album (id),
  track INTEGER CHECK (track > 0),
  song_writer_id INTEGER REFERENCES song_writer (id)
);
