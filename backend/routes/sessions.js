// server/routes/sessions.js
const express = require('express');
const Session = require('../models/Session');
const Availability = require('../models/Availability');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Schedule a session
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { start, end, attendees } = req.body;
        const userId = req.user.id;
        const availability = await Availability.findOne({ user: userId, start: { $lte: start }, end: { $gte: end } });
        if (!availability) return res.status(400).json({ message: 'User not available' });
        const session = new Session({ start, end, attendees });
        await session.save();
        res.json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get scheduled sessions
router.get('/', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const sessions = await Session.find({ 'attendees.email': userId });
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
