const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1'); 
 
routes.get('/luciana', lesson1Controller.LucianaPoppi);
routes.get('/daniel', lesson1Controller.danielFaria);
routes.get('/beatriz', lesson1Controller.BeatrizPoppi);
routes.get('/julie', lesson1Controller.JuliePoppi);

module.exports = routes;