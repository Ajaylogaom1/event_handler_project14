// server/routes/availability.js
const express = require('express');
const Availability = require('../models/Availability');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Add or update availability
router.post('/', authMiddleware,  async (req, res) => {
    try {
        const { start, end, duration } = req.body;
        const userId = req.user.id;
        const availability = await Availability.findOneAndUpdate(
            { user: userId, start, end },
            { start, end, duration },
            { new: true, upsert: true }
        );
        res.json(availability);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get availability
router.get('/', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const availability = await Availability.find({ user: userId });
        res.json(availability);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
