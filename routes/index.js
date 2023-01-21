const express = require('express');
const projectValidator = require('../validators/projectValidator');

const router = express.Router();
const projectController = require('../controllers/projectController');
const userController = require('../controllers/userController');
const homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/',homeController.index);

router.post('/projects',projectValidator.create, projectController.store);
router.get('/projects', projectController.index);
router.get('/projects/:projectId', projectController.show);
router.put('/projects/:projectId', projectController.update);
router.delete('/projects/:projectId', projectController.delete);

router.post('/users', userController.store);
router.get('/users', userController.index);
router.get('/users/:projectId', userController.show);
router.put('/users/:projectId', userController.update);
router.delete('/users/:projectId', userController.delete);



module.exports = router;
