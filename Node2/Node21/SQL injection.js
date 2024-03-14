const mysql = require('mysql');

// Assume 'connection' is a valid MySQL connection object

function login(username, password) {
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const values = [username, password];

  return new Promise((resolve, reject) => {
    connection.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Usage
login('admin', 'password')
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
