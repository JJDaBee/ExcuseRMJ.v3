import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    Card,
    CardContent,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Services() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [filteredSlots, setFilteredSlots] = useState([]);
    const [selectedSlotIndex, setSelectedSlotIndex] = useState(null); // Track the selected card

    const handleAreaChange = (event, newArea) => {
        setSelectedArea(newArea);
    };

    const handleTimeChange = (event, newTime) => {
        setSelectedTime(newTime);
    };

    const handleSearch = async () => {
        try {
            const year = selectedDate.getFullYear();
            const month = (selectedDate.getMonth() + 1)
                .toString()
                .padStart(2, '0');
            const day = selectedDate.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;

            const response = await axios.get(
                'http://localhost:5000/api/volunteer/slots',
                {
                    params: {
                        date: formattedDate,
                        area: selectedArea,
                        time: selectedTime,
                    },
                }
            );

            setFilteredSlots(response.data);
            setSelectedSlotIndex(null); // Reset the selected slot
        } catch (error) {
            console.error('Error fetching volunteer slots:', error);
        }
    };

    const handleCardClick = (index) => {
        setSelectedSlotIndex(index); // Set the clicked card as the selected one
    };

    const handleBackClick = () => {
        setSelectedSlotIndex(null); // Deselect the card, showing all cards again
    };

    const handleConfirmClick = () => {
        alert('Slot has been confirmed');
        setSelectedSlotIndex(null); // Return to the filter screen after confirmation
    };

    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#e0f7e0',
                borderRadius: 3,
                maxWidth: 650,
                margin: 'auto',
                textAlign: 'center',
            }}
        >
            <Typography variant="h5" gutterBottom>
                VOLUNTEERING OPPORTUNITIES
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Please select date to begin
            </Typography>

            {/* Date Picker */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    views={['day', 'month', 'year']}
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    marginTop: 3,
                }}
            >
                <Box>
                    <Typography variant="subtitle2" gutterBottom>
                        Area
                    </Typography>
                    <ToggleButtonGroup
                        value={selectedArea}
                        onChange={handleAreaChange}
                        aria-label="area selection"
                        exclusive
                    >
                        <ToggleButton value="North" aria-label="north">
                            North
                        </ToggleButton>
                        <ToggleButton value="South" aria-label="south">
                            South
                        </ToggleButton>
                        <ToggleButton value="East" aria-label="east">
                            East
                        </ToggleButton>
                        <ToggleButton value="West" aria-label="west">
                            West
                        </ToggleButton>
                        <ToggleButton value="Central" aria-label="central">
                            Central
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <Box>
                    <Typography variant="subtitle2" gutterBottom>
                        Time
                    </Typography>
                    <ToggleButtonGroup
                        value={selectedTime}
                        onChange={handleTimeChange}
                        aria-label="time selection"
                        exclusive
                    >
                        <ToggleButton value="Morning" aria-label="morning">
                            Morning
                        </ToggleButton>
                        <ToggleButton value="Afternoon" aria-label="afternoon">
                            Afternoon
                        </ToggleButton>
                        <ToggleButton value="Evening" aria-label="evening">
                            Evening
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>

            <Button
                variant="contained"
                sx={{
                    marginTop: 4,
                    backgroundColor: '#8bc34a',
                    padding: '10px 20px',
                    fontWeight: 'bold',
                }}
                onClick={handleSearch}
            >
                SEARCH
            </Button>

            {/* Display filtered slots */}
            <Box sx={{ marginTop: 4 }}>
                {filteredSlots.length > 0 ? (
                    filteredSlots.map((slot, index) =>
                        selectedSlotIndex === null ||
                        selectedSlotIndex === index ? (
                            <Card
                                key={index}
                                sx={{
                                    marginBottom: 2,
                                    borderRadius: 3,
                                    transition:
                                        'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                                    },
                                }}
                                onClick={() => handleCardClick(index)}
                            >
                                <CardContent>
                                    <Typography variant="h6">
                                        {slot.date} - {slot.area} - {slot.time}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        {slot.description}
                                    </Typography>
                                    {selectedSlotIndex === index && (
                                        <Box sx={{ marginTop: 2 }}>
                                            <Typography variant="body1">
                                                More details about this slot...
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                sx={{ marginTop: 2 }}
                                                onClick={handleBackClick}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                sx={{
                                                    marginTop: 2,
                                                    marginLeft: 2,
                                                }}
                                                onClick={handleConfirmClick}
                                            >
                                                Confirm
                                            </Button>
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        ) : null
                    )
                ) : (
                    <Typography variant="body2" sx={{ marginTop: 4 }}>
                        No slots available for the selected criteria.
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default Services;
