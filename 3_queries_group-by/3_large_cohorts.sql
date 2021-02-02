SELECT cohorts.name, COUNT(students.id) AS student_count
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
HAVING COUNT(students.id) >= 18
ORDER BY student_count, cohorts.name; 
