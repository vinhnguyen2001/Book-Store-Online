// Contain main routes

const express = require('express');

const router = express.Router();

router.use('/', require('../controllers/order/order.C'));


module.exports = router;