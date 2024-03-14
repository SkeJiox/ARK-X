const express = require('express');
const csurf = require('csurf');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json())

//En utilisant escape, les caractères spéciaux seront convertis en leurs équivalents HTML, ce qui rendra les attaques XSS inefficaces.
const escape = require('express');

// Utiliser une variable d'environnement pour le secret de session
const sessionSecret = process.env.SESSION_SECRET || 'default-secret';
// Middleware

// app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

//En ajoutant csurf comme middleware, des jetons CSRF uniques seront automatiquement générés et attachés aux cookies de session. Lorsqu'un formulaire est soumis, le jeton CSRF doit être inclus dans la demande.
const csrfProtect = (csurf({cookie : true}));
app.use(session({ secret: sessionSecret, resave: true, saveUninitialized: true }));

// Routes
app.get('/', csrfProtect, (req, res) => {
  req.session.csrf = req.csrfToken();
  console.log( req.session.csrf);
  res.send('Welcome to the Sample Vulnerable Node.js Application');
});

// Routes
app.get('/login', (req, res) => {
  // Récupérer le jeton CSRF à partir de la demande
  console.log(req.session.csrf);

  // Afficher le formulaire de connexion avec le jeton CSRF intégré
  res.json(req.session.csrf);
});

app.post('/login', (req, res) => {
  const { username, password, csrf } = req.body;
  const csrfToken = req.session.csrf
  console.log("csrf1 ", csrf);
  console.log("csrf2 ", csrfToken)  
  if (csrfToken !== csrf) {
    return res.status(403).send('Invalid CSRF token...');
  }

  // Authenticate user (vulnerable code for the challenge)
  if (username === 'admin' && password === 'password') {
    req.session.authenticated = true;
    res.redirect('/profile');
  } else {
    res.send('Invalid username or password');
  }
});

app.get('/profile', (req, res) => {
  if (req.session.authenticated) {
    res.send( `<h1> Welcome to your profile, ${req.session.username}</h1>`);
  } else {
    res.redirect('/login');
  }
});

// Server
app.listen(8000, () => {
  console.log('Server running on port 8000');
});