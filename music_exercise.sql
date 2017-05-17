-- 1. What are tracks for a given album?
SELECT track, song.name FROM song
JOIN album ON album_id = album.id
WHERE album.name = 'Dark Side of the Moon'
ORDER BY track;

-- 2. What are the albums produced by a given artist?
SELECT artist.name, album.name FROM album
JOIN artist ON artist_id = artist.id
WHERE artist.name = 'Pink Floyd'

-- 3. What is the track with the longest duration?
SELECT name, duration FROM song
WHERE duration = (SELECT max(duration) FROM song);

-- 4. What are the albums released in the 60s? 70s? 80s? 90s?
SELECT name, year FROM album
WHERE year>=1970 and year<1980;

-- 5. How many albums did a given artist produce in the 70s?
SELECT artist.name, COUNT(*) FROM album
JOIN artist ON artist_id = artist.id
WHERE artist.name='Pink Floyd' and year >= 1970 and year < 1980
GROUP BY artist.name;

-- 6. What is each artist's latest album?
SELECT artist.name, MAX(year) FROM album
JOIN artist ON artist_id = artist.id
GROUP BY artist.name;

-- 7. List all albums along with its total duration based on summing the duration of its tracks.
SELECT album.name, SUM(duration) FROM album
JOIN song ON album_id = album.id
GROUP BY album.name;

-- 8. What is the album with the longest duration?
SELECT display_name, sum_duration FROM (
SELECT album.name as display_name, SUM(duration) as sum_duration FROM album
JOIN song ON album_id = album.id
GROUP BY album.name) as SubQuery
WHERE sum_duration = (SELECT MAX(sum_duration) FROM (SELECT SUM(duration) as sum_duration FROM album
JOIN song ON album_id = album.id
GROUP BY album.name) as SubQuery2)
