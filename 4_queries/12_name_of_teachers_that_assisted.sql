SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_request ON teacher_id = teachers.id
JOIN students ON student_id = studernts.id 
JOIN cohorts ON cohort_id = cohorts.id 
WHERE name = 'JUL02'
GROUP BY teacher
ORDER BY teacher;