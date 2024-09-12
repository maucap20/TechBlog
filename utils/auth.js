const withAuth = (req, res, next) => {
  // If the user is not authenticated, redirect them to the login page
  // This applies to the `/gallery/:id` and `/painting/:id` routes
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is authenticated, proceed with the route handler
    // Call next() to allow access to the intended route
    next();
  }
};

module.exports = withAuth;
