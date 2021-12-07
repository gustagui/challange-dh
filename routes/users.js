var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET users listing. */
router.get('/', indexController.showHome);
router.get('/home', indexController.showHome);

router.post('/formulario', indexController.store);

module.exports = router;
