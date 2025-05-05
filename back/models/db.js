// back/models/db.js
import mysql from 'mysql2';
import util from 'util';

const pool = mysql.createPool({
  connectionLimit: 10,
  user: 'root',
  password: '',
  database: 'pagina_septigo'
});


// pool.query('SELECT * FROM usuarios', function (err, rows, fields) {
//   if (err) throw err; console.log(rows);
// });

pool.query = util.promisify(pool.query);

export default pool;
