const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/', supplierController.index);
router.get('/new', supplierController.new);
router.post('/', supplierController.create);
router.get('/:id/edit', supplierController.edit);
router.post('/:id', supplierController.update);
router.get('/:id/delete', supplierController.delete);

module.exports = router;
