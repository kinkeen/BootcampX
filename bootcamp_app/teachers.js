const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const userInput = process.argv.slice(2)

const cohortName = process.args[2];
const limit = process.args[3] || 5;
const values = [`${cohortName}`, limit];

const queryString = (`
    SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
    FROM teachers
    JOIN assistance_requests ON teacher_id = teachers.id
    JOIN students ON student_id = students.id
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name LIKE $1
    ORDER BY teacher
    LIMIT $2;
`);

pool.query(queryString, values)
.then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
})
}).catch(err => console.error('query error', err.stack));