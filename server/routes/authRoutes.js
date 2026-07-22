const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', (req, res) => res.json({ success: true, message: 'Password reset link sent to email' }));
router.post('/google-auth', (req, res) => res.json({ success: true, token: 'jwt_google_sample', user: { name: 'Alex Rivera' } }));

module.exports = router;
