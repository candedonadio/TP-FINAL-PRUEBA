import pool from './db.js';
import md5 from 'md5';

export async function getUserByUsernameAndPassword(user, password) {
  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND password = ? LIMIT 1";
  return new Promise((resolve, reject) => {
    pool.query(sql,
      [user, md5(password)],
        (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
});
}

export default { getUserByUsernameAndPassword };


