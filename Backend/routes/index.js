var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const roleController = require('../controllers').role;
router.get('/api/role',roleController.list);
router.get('/api/role/:id',roleController.getById);
router.post('/api/role',roleController.add);
router.put('/api/role/:id', roleController.update);
router.delete('/api/role/:id', roleController.delete);

const subjectController = require('../controllers').subject;
router.get('/api/subject',subjectController.list);
router.get('/api/subject/:id',subjectController.getById);
router.post('/api/subject',subjectController.add);
router.put('/api/subject/:id', subjectController.update);
router.delete('/api/subject/:id', subjectController.delete);


module.exports = router;
