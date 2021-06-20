const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let UserSchema = new Schema({
   name: {
      type: String
   },
   email: {
      type: String,
      unique: true
   },
   Steps: {
      type: Number
   },
   coins: {
      type: Number
   }
},{
   versionKey: false
})

module.exports = mongoose.model('User', UserSchema)