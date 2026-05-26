const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');

// Jab POST request aayegi, toh submitContact controller chalega
router.post('/', submitContact);

// Jab GET request aayegi, toh getContacts controller chalega
router.get('/', getContacts);

module.exports = router;