const express = require('express');
const _ = require('lodash');
const UserDetails = require('../models/user')
const router = express.Router()


router.post('/', async (req, res) => {
    try {
      const userDetails = new UserDetails(_.pick(req.body, [
        'title', 'first_name', 'last_name', 'position', 'company', 'business', 'employees',
        'street', 'additional', 'zip', 'place', 'country', 'code', 'phone', 'your_email', 'accept_terms'
      ]));
      await userDetails.save();
      res.status(201).send('User details saved successfully!');
    } catch (error) {
      console.log('Error:', error.message); // Log the error message
      res.status(400).send('Error saving user details: ' + error.message);
    }
  });

// Read all users
router.get('/', async (req, res) => {
  try {
    const users = await UserDetails.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send('Error fetching user details: ' + error.message);
  }
});

// Read a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await UserDetails.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send('Error fetching user details: ' + error.message);
  }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const user = await UserDetails.findByIdAndUpdate(req.params.id, _.pick(req.body, [
      'title', 'first_name', 'last_name', 'position', 'company', 'business', 'employees',
      'street', 'additional', 'zip', 'place', 'country', 'code', 'phone', 'your_email', 'accept_terms'
    ]), { new: true });
    if (!user) return res.status(404).send('User not found');
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send('Error updating user details: ' + error.message);
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await UserDetails.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.status(200).send('User deleted successfully');
  } catch (error) {
    res.status(400).send('Error deleting user: ' + error.message);
  }
});


module.exports = router