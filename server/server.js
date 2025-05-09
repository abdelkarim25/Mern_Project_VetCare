const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import routes
const routes = require('./routes/routes');
// const ownerRoutes = require('./routes/owners');
// const petRoutes = require('./routes/pets');
// const visitRoutes = require('./routes/visits');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/', routes);
// app.use('/api/owners', ownerRoutes);
// app.use('/api/pets', petRoutes);
// app.use('/api/visits', visitRoutes);

app.get('/', (req, res) => {
  res.send('Veterinary Clinic API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});