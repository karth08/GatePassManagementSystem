const express = require('express');
const router = express.Router();
const GatePassRequest = require('../models/GatePassRequest');

// Apply for a gate pass
router.post('/', async (req, res) => {
  const { studentId, reason } = req.body;

  try {
    const newRequest = new GatePassRequest({ student: studentId, reason });
    await newRequest.save();
    res.status(201).json({ message: 'Gate pass request created successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error creating request' });
  }
});

// Faculty view requests
router.get('/', async (req, res) => {
  try {
    const requests = await GatePassRequest.find().populate('student', 'name email');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching requests' });
  }
});

// Approve or reject request
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const request = await GatePassRequest.findByIdAndUpdate(id, { status }, { new: true });
    if (!request) return res.status(404).json({ error: 'Request not found' });
    res.json({ message: 'Request updated', request });
  } catch (err) {
    res.status(500).json({ error: 'Error updating request' });
  }
});

module.exports = router;
