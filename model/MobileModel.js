const mongoose = require('mongoose');


const Mobile = new mongoose.Schema({
  name: String,
});



module.CreateMobile= mongoose.model('Mobile', Mobile);;
