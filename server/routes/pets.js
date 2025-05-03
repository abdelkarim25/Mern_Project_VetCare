// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const Visit = require('../models/Visit');
const Owner = require('../models/Owner');

// Get all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner', 'firstName lastName');
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get pet by ID with visits
router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/:petId/visits', async (req, res) => {
  try {
    // 1. Check if the Pet exists
    const pet = await Pet.findById(req.params.petId);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    // 2. Validate incoming visit data (date, description)
    if (!req.body.date || !req.body.description) {
      return res.status(400).json({ message: 'Missing required visit fields: date, description' });
    }

    // 3. Create the new Visit instance
    const visit = new Visit({
      petId: req.params.petId, // Get petId from the URL parameter
      date: req.body.date,
      description: req.body.description,
    });

    // 4. Save the visit
    const newVisit = await visit.save();

    // 5. Send back the created visit (status 201)
    res.status(201).json(newVisit);

  } catch (err) {
    console.error(`Error creating visit for pet ${req.params.petId}:`, err);
    res.status(500).json({ message: `Error creating visit: ${err.message}` }); // Or 400 if it's a validation error
  }
});

module.exports = router;