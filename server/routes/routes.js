// routes/owners.js
const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');
const Pet = require('../models/Pet');
const Visit = require('../models/Visit');
const { mongoose } = require('mongoose');

// Get all owners
router.get('/owners/', async (req, res) => {
  try {
    const search = {}
    const lastName = req.query.lastName
    if(lastName) {
      search.Last_Name = { 
        $regex: lastName,
        $options: 'i'  // case insensitive
      }
      // search.Last_Name = search // Strict search
    }
    const owners = await Owner.find(search).sort({ lastName: 1 });
    res.json(owners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get owner by ID
router.get('/owners/:id', async (req, res) => {
  try {
    // const owner = await Owner.findById(req.params.id);
    const owner = await Owner.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.params.id) }
      },
      {
        $lookup: { 
          from: "pets", 
          localField: "_id", 
          foreignField: "ownerId", 
          as: "pets" 
        } 
      },
      {
        $unwind: {
          path: "$pets",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: "visits",
          let: { petId: "$pets._id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$petId", "$$petId"] }
              }
            },
            {
              $sort: { date: -1 }
            }
          ],
          as: "pets.visits"
        }
      },
      {
        $group: {
          _id: "$_id",
          First_Name: { $first: "$First_Name" },
          Last_Name: { $first: "$Last_Name" },
          City: { $first: "$City" },
          Adress: { $first: "$Adress" },
          Telephone: { $first: "$Telephone" },
          pets: {
            $push: {
              $cond: [
                { $ifNull: ["$pets._id", false] },
                "$pets",
                "$$REMOVE"
              ]
            }
          }
        }
      },
    ])

    // if (!owner) return res.status(404).json({ message: 'Owner not found' });
    if (owner.length === 0) return res.status(404).json({ message: 'Owner not found' });
    res.json(owner[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new owner
router.post('/owners/', async (req, res) => {
  const owner_ = {
    First_Name: req.body.firstName?.trim(),
    Last_Name: req.body.lastName?.trim(),
    Adress: req.body.address?.trim(),
    City: req.body.city?.trim(),
    Telephone: req.body.telephone?.trim()
  }
  
  if(!owner_.First_Name || !owner_.Last_Name || !owner_.Adress || !owner_.City || !owner_.Telephone) {
    res.status(422).json({ message: "All the fields are required" });
  }

  const owner = new Owner(owner_);

  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update owner
router.put('/owners/:id', async (req, res) => {
  try {
    const {firstName, lastName, address, city, telephone} = req.body
    if(!firstName || !lastName || !address || !city || !telephone) {
      res.status(422).json({ message: "All the fields are required" });
    }

    const owner = await Owner.findById(req.params.id);
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    owner.First_Name = firstName;
    owner.Last_Name = lastName;
    owner.Adress = address;
    owner.City = city;
    owner.Telephone = telephone;
    
    const result = await owner.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete owner
router.delete('/owners/:id', async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) return res.status(404).json({ message: 'Owner not found' });
    
    await owner.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Owner deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get pets
router.get('/owners/:id/pets', async (req, res) => {
  try {
    const pets = await Pet.find({ owner: req.params.id });
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get pet by Id
router.get('/owners/:id/pets/:petId', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create pet
router.post('/owners/:id/pets', async (req, res) => {
  const pet_ = {
    name: req.body.name?.trim(),
    birthDate: req.body.birthDate?.trim(),
    type: req.body.type?.trim(),
    ownerId: new mongoose.Types.ObjectId(req.params.id)
  }
  
  if(!pet_.name || !pet_.birthDate || !pet_.type) {
    res.status(422).json({ message: "All the fields are required" });
  }

  const pet = new Pet(pet_);
  try {
    const result = await pet.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update pet
router.put('/owners/:id/pets/:petId', async (req, res) => {
  const {name, birthDate, type} = req.body
  if(!name || !birthDate || !type) {
    res.status(422).json({ message: "All the fields are required" });
  }

  const pet = await Pet.findById(req.params.petId);
  if (!pet) {
    return res.status(404).json({ message: 'pet not found' });
  }

  pet.name = name
  pet.birthDate = birthDate
  pet.type = type
  
  try {
    const result = await pet.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete pet
router.delete('/owners/:id/pets/:petId', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    
    await pet.deleteOne({ _id: req.params.petId });
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Visit by Id
router.get('/owners/:id/pets/:petId/visits/:visitId', async (req, res) => {
  try {
    const visit = await Visit.findById(req.params.visitId);
    if (!visit) return res.status(404).json({ message: 'visit not found' });
    
    res.status(200).json(visit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create visit
router.post('/owners/:id/pets/:petId/visits', async (req, res) => {
  const visit_ = {
    date: req.body.date?.trim(),
    description: req.body.description?.trim(),
    petId: new mongoose.Types.ObjectId(req.params.petId)
  }
  
  if(!visit_.date || !visit_.description) {
    res.status(422).json({ message: "All the fields are required" });
  }

  const visit = new Visit(visit_);
  try {
    const result = await visit.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update visit
router.put('/owners/:id/pets/:petId/visits/:visitId', async (req, res) => {
  const {date, description} = req.body
  if(!date || !description) {
    res.status(422).json({ message: "All the fields are required" });
  }

  const visit = await Visit.findById(req.params.visitId);
  if (!visit) {
    return res.status(404).json({ message: 'visit not found' });
  }

  visit.date = date
  visit.description = description
  
  try {
    const result = await visit.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete visit
router.delete('/owners/:id/pets/:petId/visits/:visitId', async (req, res) => {
  try {
    const visit = await Visit.findById(req.params.visitId);
    if (!visit) return res.status(404).json({ message: 'Visit not found' });
    
    await visit.deleteOne({ _id: req.params.visitId });
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;