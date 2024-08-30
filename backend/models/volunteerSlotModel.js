const mongoose = require('mongoose');

const volunteerSlotSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

const VolunteerSlot = mongoose.model('volunteerSlot', volunteerSlotSchema);

module.exports = VolunteerSlot;
