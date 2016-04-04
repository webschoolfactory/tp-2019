/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
    throw new Error('boom');
  res.render('home', {
    title: 'Home'
  });
};