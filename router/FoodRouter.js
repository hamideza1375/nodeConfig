const router = require('express').Router();
const {FoodController: Food} = require('../controllers/FoodController');
const user = require('../middleware/user');
const Auth = require('../middleware/Auth');



router.put('/editcomment/:id',Auth, Food.editcomment);

module.exports = router