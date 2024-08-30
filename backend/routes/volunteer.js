const express = require('express');
const VolunteerSlot = require('../models/volunteerSlotModel'); // Adjust the path if necessary

const router = express.Router(); // Initialize the router

// Define the route for fetching slots
router.get('/slots', async (req, res) => {
    try {
        const { date, area, time } = req.query;

        console.log('Query Parameters:', req.query);

        // Build the query object
        let query = {};
        if (date) query.date = date.trim();
        if (area) query.area = area.trim();
        if (time) query.time = time.trim();

        console.log('MongoDB Query:', query);

        // Find matching slots
        const slots = await VolunteerSlot.find(query);
        console.log('Found Slots:', slots);

        res.json(slots);
    } catch (err) {
        console.error('Error fetching slots:', err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
