const router = require('express').Router();
const {MobileController: mobile} = require('../controllers/MobileController');
const user = require('../middleware/user');
const Auth = require('../middleware/Auth');



router.post('/mobile', mobile.mobile);

module.exports = router