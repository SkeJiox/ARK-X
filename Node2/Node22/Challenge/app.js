const express = require('express');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

app.post('/login', 
    body('username').isLength({min:5}).trim().escape(),
    body('password').isLength({min:8}).trim().escape(),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const {username, password} = req.body;

        const user = { id: 123, username, password}; // Example user object
        
        if(username === 'admin' && password === 'password'){
          const token = jwt.sign({ user: user.id, username, password }, 'secret_key', { expiresIn: '2h' });
          res.json({ token });
        } else{
            res.status(401).json({ error: 'Unauthorized: Invalid credentials' })
        }
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(' ')[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
}
  
app.get('/protected', ensureToken, (req, res) => {
    jwt.verify(req.token, 'secret_key', (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({ data });
      }
    });
  });

app.listen(3000, () => {
    console.log(`server is running in port 3000`)
})