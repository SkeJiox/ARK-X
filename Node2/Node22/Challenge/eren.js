const express = require('express');
const csurf = require('csurf');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const {body, validationResult} = require('express-validation');
const jwt = require('jsonwebtoken');
//En utilisant escape, les caractères spéciaux seront convertis en leurs équivalents HTML, ce qui rendra les attaques XSS inefficaces.
const escape = require('express');
// Utiliser une variable d'environnement pour le secret de session
const sessionSecret = process.env.SESSION_SECRET || 'default-secret';
//user provided data
const userId = req.body.userId;
username=req.body.username;
//sanitiye user provided data
const sanitizedUserId = sanitize(userId);
const sanitizedUsername = sanitize(username);
//generate jwt token with sqnitized data
const token = jwt.sign({userId: sanitized, sanitizedUserId, username: sanitizedUsername}, 'your_secret_key')


// Middleware
app.use((err, req, res, next) =>{
  if(err instanceof Error && err.name === 'validationError'){
    return res.status(400).json({error: 'validation failed', detqils: err.message});
}
next(err);
});
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
//En ajoutant csurf comme middleware, des jetons CSRF uniques seront automatiquement générés et attachés aux cookies de session. Lorsqu'un formulaire est soumis, le jeton CSRF doit être inclus dans la demande.
app.use(csurf({cookie : true}));
app.use(session({ secret: sessionSecret, resave: true, saveUninitialized: true }));
// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Sample Vulnerable Node.js Application');
});

// Routes
app.get('/login', (req, res) => {
  // Récupérer le jeton CSRF à partir de la demande
  const csrfToken = req.csrfToken();

  // Afficher le formulaire de connexion avec le jeton CSRF intégré
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <!-- Intégrer le jeton CSRF dans le formulaire -->
      <input type="hidden" name="_csrf" value="<%= csrfToken %>"> 
      
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login',
[
body('username').trim().escape(),
  body('password').trim().escape()
],
(req, res) => {
  //user credentials

 user = { id: 123 }; // Example user object
 token = jwt.sign({ user: user.id }, 'secret_key', { expiresIn: '2h' });

  res.json({ token });
    //check validation errors

    const errors = validationResult(req);
    const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Successful authentication
    res.status(200).json({ message: 'Authentication successful' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Authentication failed' });
  }
});

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    // Authenticate user (vulnerable code for the challenge)
    
 
  // Authenticate user (vulnerable code for the challenge)
  //Validate CSRF token
  console.log(req.csrfToken());
  console.log(req.body._csrf);
  if (req.csrfToken() !== req.body._csrf) {
    return res.status(403).send('Invalid CSRF token');
  }

  // Authenticate user (vulnerable code for the challenge)
  if (username === 'admin' && password === 'password') {
    req.session.authenticated = true;
    res.redirect('/profile');
  } else {
    res.send('Invalid username or password');
  }

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

app.get('/profile', ensureToken, (req, res) => {
  jwt.verify(req.token, 'secret_key', (err, data)=>{
    if (err) {
      res.sendStatus(403);
    } else {
      res.json(data);
    }
  });
  
  
  if (req.session.authenticated) {
    res.send(<h1>Welcome to your profile, ${req.session.username}</h1>);
  } else {
    res.redirect('/login');
  }
});

// Server
app.listen(8000, () => {
  console.log('Server running on port 8000');
});