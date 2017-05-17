-- 1. List all the reviews for a given restaurant given a specific restaurant ID.
SELECT restaurant_id, review FROM review
WHERE restaurant_id = 3;

-- 2. List all the reviews for a given restaurant, given a specific restaurant name.
SELECT restaurant.name, review FROM review
JOIN restaurant ON restaurant_id = restaurant.id
WHERE restaurant.name = 'Restaurant 1';

-- 3. List all the reviews for a given reviewer, given a specific author name.
SELECT reviewer.name, review FROM review
JOIN reviewer ON reviewer_id = reviewer.id
WHERE reviewer.name = 'Reviewer 1';

-- 4. List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.
SELECT restaurant.name, review FROM review
JOIN restaurant ON restaurant_id = restaurant.id;

-- 5. Get the average stars by restaurant. The result should have the restaurant name and its average star rating.
SELECT restaurant.name, AVG(stars) AS average_stars FROM review
JOIN restaurant ON restaurant_id = restaurant.id
GROUP BY restaurant.name;

-- 6. Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.
SELECT restaurant.name, COUNT(restaurant.name) AS total_reviews FROM review
JOIN restaurant ON restaurant_id = restaurant.id
GROUP BY restaurant.name;

-- 7. List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.
SELECT review, restaurant.name, reviewer.name FROM review
JOIN restaurant ON restaurant_id = restaurant.id
JOIN reviewer ON reviewer_id = reviewer.id;

-- 8. Get the average stars given by each reviewer. (reviewer name, average star rating)
SELECT reviewer.name, AVG(stars) FROM review
JOIN reviewer ON reviewer_id = reviewer.id
GROUP BY reviewer.name;

-- 9. Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)
SELECT reviewer.name, MIN(stars) FROM review
JOIN reviewer ON reviewer_id = reviewer.id
GROUP BY reviewer.name;

-- 10. Get the number of restaurants in each category. (category name, restaurant count)
SELECT category, COUNT(category) FROM restaurant
GROUP BY category;

-- 11. Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
SELECT restaurant.name, COUNT(*) FROM restaurant
JOIN review ON restaurant_id = restaurant.id
WHERE stars=5
GROUP BY restaurant.name;

-- 12. Get the average star rating for a food category. (category name, average star rating)
SELECT category, AVG(stars) FROM restaurant
JOIN review ON restaurant_id = restaurant.id
GROUP BY category;
