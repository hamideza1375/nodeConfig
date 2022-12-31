// const { CreateMobile } = require('../model/MobileModel');
const { validateCreateRestaurant } = require('../validator/MobileSchema');

function MobileController() {
  
  this.mobile = async(req, res) => {
    const valid = validateCreateRestaurant(req.body)
    if (valid.error) return res.status(400).send('err')
    console.log(valid);
     res.status(200).send('good')
  }

}

exports.MobileController = new MobileController()








// // const { CreateMobile } = require('../model/MobileModel');
// const { validateCreateRestaurant } = require('../validator/MobileSchema');

// function MobileController() {

  
//   this.mobile = async(req, res) => {
//     const valid = validateCreateRestaurant(req.body)
//     if (valid.error) return res.status(400).send('err')
//     console.log(valid);
//      res.status(200).send('good')
//   }

// }

// exports.MobileController = new MobileController()