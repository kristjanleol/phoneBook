const express = require('express');
const phoneController = require('../controllers/items');
const router = express.Router();
router.post('/delete',phoneController.deleteItems);
router.get('/', phoneController.getItems);
router.post('/', phoneController.postItems);
module.exports = router;