// routes/auth.js
const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controllers/auth');

// Rutas de autenticación
router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;