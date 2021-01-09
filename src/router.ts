import indexController from './controller';

const express = require('express');

const router = express.Router();

// main routes
router.get('/', indexController.create);
router.post('/maze', indexController.show);

export default router;
