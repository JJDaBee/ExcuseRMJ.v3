const mongoose = require('mongoose');
const VolunteerSlot = require('./volunteerSlotModel'); // Adjust the path if necessary
require('dotenv').config();

console.log('Mongo URI:', process.env.MONGO_URI);

// MongoDB connection URI
const uri = process.env.MONGO_URI;

if (!uri) {
    throw new Error('MONGO_URI is undefined. Please check your .env file.');
}

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

// Define the slots
const slots = [];

const areas = ['North', 'South', 'East', 'West', 'Central'];
const times = ['Morning', 'Afternoon', 'Evening'];

for (let i = 0; i < 30; i++) {
    const area = areas[i % areas.length];
    const time = times[i % times.length];
    const slot = {
        date: '2023-08-31',
        area: area,
        time: time,
        description: `Volunteering Slot ${i + 1} in ${area} during the ${time}`,
    };
    slots.push(slot);
}

// Insert the slots into the database
VolunteerSlot.insertMany(slots)
    .then(() => {
        console.log('30 slots have been successfully inserted');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log('Error inserting slots:', err);
        mongoose.connection.close();
    });
