

-- 4. Based on the previous query, get the count of the number of techs used by each project.
SELECT name, count(id) FROM tech
RIGHT OUTER JOIN project_uses_tech
ON tech_id = tech.id
GROUP BY name ;

-- 5. Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?
SELECT * FROM project
LEFT OUTER JOIN project_uses_tech
ON project_id = project.id
WHERE project_id IS NULL;

-- 6. Based on the previous query, get the count of the number of projects that use each tech.
SELECT tech.name, tech_id, count(tech_id) FROM project
LEFT OUTER JOIN project_uses_tech
ON project_id = project.id
LEFT OUTER JOIN tech
ON tech_id = tech.id
GROUP BY tech.name, tech_id;

-- 7. List all projects along with each technology used by it. You will need to do a three-way join.
SELECT project.name, tech.name FROM project_uses_tech
JOIN project ON project_id = project.id
JOIN tech ON tech_id = tech.id;

-- 8. List all the distinct techs that are used by at least one project.
SELECT DISTINCT(tech.name) FROM project_uses_tech
JOIN project ON project_id = project.id
JOIN tech ON tech_id = tech.id;

-- 9. List all the distinct techs that are not used by any projects.
SELECT DISTINCT(tech.name) FROM tech
LEFT OUTER JOIN project_uses_tech ON tech_id = tech.id
LEFT OUTER JOIN project ON project_id = project.id
WHERE tech_id IS NULL;

-- 10. List all the distinct projects that use at least one tech.
SELECT DISTINCT(project.name) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
LEFT OUTER JOIN tech ON tech_id = tech.id
WHERE tech_id IS NOT NULL;

-- 11. List all the distinct projects that use no tech.
SELECT DISTINCT(project.name) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
LEFT OUTER JOIN tech ON tech_id = tech.id
WHERE tech_id IS NULL;

-- 12. Order the projects by how many tech it uses.
SELECT project.name, count(tech_id) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
LEFT OUTER JOIN tech ON tech_id = tech.id
GROUP BY project.name
ORDER BY count DESC;

-- 13. Order the tech by how many projects use it.
SELECT tech.name, count(project_id) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
RIGHT OUTER JOIN tech ON tech_id = tech.id
GROUP BY tech.name
ORDER BY count DESC;

-- 14. What is the average number of techs used by a project?
