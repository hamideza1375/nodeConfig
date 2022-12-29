const mongoose = require('mongoose');


const CreateFood = new mongoose.Schema({
  fullname: String,
  createdAt: { type: Date },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "CreateFood" },
});



module.CreateFood = mongoose.model('CreateFood', CreateFood);;
