const router = require('express').Router();
const Admin = require('../controllers/AdminController');
const user = require('../middleware/user');
const AuthAdmin = require('../middleware/AuthAdmin');


// User
router.post("/useradmin", AuthAdmin, Admin.setUserAdmin);

module.exports = router





