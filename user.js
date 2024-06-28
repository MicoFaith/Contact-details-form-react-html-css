const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserDetailsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  business: {
    type: String,
    required: true,
  },
  employees: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  additional: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  country: {
    type: String,

    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  your_email: {
    type: String,
    required: true,
    match: [/[^@]+@[^@]+\.[a-zA-Z]{2,6}/, 'Please enter a valid email address.'],
  },
  accept_terms: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);

module.exports = UserDetails;
