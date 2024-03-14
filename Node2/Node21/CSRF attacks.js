const express = require('express');
const csurf = require('csurf');

const app = express();

// Enable CSRF protection middleware
app.use(csurf({ cookie: true }));

// Update profile route
app.post('/profile', (req, res) => {
  // Validate CSRF token
  if (req.csrfToken() !== req.body._csrf) {
    return res.status(403).send('Invalid CSRF token');
  }

  // Process profile update
  // ...

  res.send('Profile updated successfully');
});

// Render form with CSRF token
app.get('/profile', (req, res) => {
  res.render('profile', { csrfToken: req.csrfToken() });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//how you can use the passed csrfToken in the template,
// assuming you're using a template engine like EJS:

<!-- profile.ejs -->
<form action="/profile" method="POST">
  <!-- CSRF token field -->
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  
  <!-- Other form fields -->
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  
  <!-- Submit button -->
  <button type="submit">Update Profile</button>
</form>
