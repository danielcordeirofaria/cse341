const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1'); 
 
routes.get('/', lesson1Controller.welcome);

routes.get('/luciana', lesson1Controller.lucianaPoppi);
routes.get('/daniel', lesson1Controller.danielFaria);
routes.get('/beatriz', lesson1Controller.beatrizPoppi);
routes.get('/julie', lesson1Controller.juliePoppi);

module.exports = routes;