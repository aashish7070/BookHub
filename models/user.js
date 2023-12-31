const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the User model schema
const userSchema = new Schema({
  uid: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  billingAddress:{
    province: {type: String},
    city: {type: String},
    area: {type: String},
    address: {type: String},
    landmark: {type: String},
    defaultShipping: {type: Boolean},
    defaultBilling: {type: Boolean},
  },
  contact: {type: Number},
  bookId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  bookStore: {type: Schema.Types.ObjectId, ref:'Store'},
  checkOutBooks: [{type: Schema.Types.ObjectId, ref:'Book'}],
  soldBooks: [{type: Schema.Types.ObjectId, ref:'Book'}],
});


// Create the User model
const User = mongoose.model('User', userSchema);
module.exports = User