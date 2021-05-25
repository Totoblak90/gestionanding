const { Router } = require('express');
const router = Router();

// Controllers
const loginController = require('../controllers/loginController')

// Login
router.post('/login', loginController.login )


module.exports = router