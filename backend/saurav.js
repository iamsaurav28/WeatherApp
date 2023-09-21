


////////////      same backup code           ////////////////////




// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '  ',
//   database: 'weatherapp',
// });

// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database as id ' + db.threadId);
// });


// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

//   db.query(query, [username, password], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('An error occurred while processing your request.');
//     } else {
//       if (result.length > 0) {
//         res.send('Login successful!');
//       } else {
//         res.status(401).send('Invalid credentials');
//       }
//     }
//   });
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
