// routes/visits.js
const express = require('express');
const router = express.Router();
const Visit = require('../models/Visit');

// Get all visits
router.get('/', async (req, res) => {
  try {
    const visits = await Visit.find().populate({
      path: 'pet',
      populate: { path: 'owner' }
    }).sort({ date: -1 });
    res.json(visits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get visit by ID
router.get('/:id', async (req, res) => {
  try {
    const visit = await Visit.findById(req.params.id).populate({
      path: 'pet',
      populate: { path: 'owner' }
    });
    if (!visit) return res.status(404).json({ message: 'Visit not found' });
    res.json(visit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new visit
/*router.post('/', async (req, res) => {
  const visit = new Visit({
    pet: req.body.petId,
    date: req.body.date,
    description: req.body.description
  });

  try {
    const newVisit = await visit.save();
    res.status(201).json(newVisit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});*/
// routes/visits.js
router.post('/', async (req, res) => {
  if (!req.body.petId || !req.body.date || !req.body.description) {
       return res.status(400).json({ message: 'Missing required fields: petId, date, description' });
  }

  const visit = new Visit({
    petId: req.body.petId,
    date: req.body.date,
    description: req.body.description
  });

  try {
    const newVisit = await visit.save();
    res.status(201).json(newVisit);
  } catch (err) {
    console.error("Error saving visit:", err);
    res.status(400).json({ message: err.message });
  }
});

// Update visit
router.put('/:id', async (req, res) => {
  try {
    const visit = await Visit.findById(req.params.id);
    if (!visit) return res.status(404).json({ message: 'Visit not found' });
    
    if (req.body.date) visit.date = req.body.date;
    if (req.body.description) visit.description = req.body.description;
    
    const updatedVisit = await visit.save();
    res.json(updatedVisit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete visit
router.delete('/:id', async (req, res) => {
  try {
    const visit = await Visit.findById(req.params.id);
    if (!visit) return res.status(404).json({ message: 'Visit not found' });
    
    await visit.remove();
    res.json({ message: 'Visit deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;