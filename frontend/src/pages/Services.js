import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';

function Services() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedArea, setSelectedArea] = useState([]);
    const [selectedTime, setSelectedTime] = useState([]);

    const handleAreaChange = (event, newArea) => {
        setSelectedArea(newArea);
    };

    const handleTimeChange = (event, newTime) => {
        setSelectedTime(newTime);
    };

    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#e0f7e0',
                borderRadius: 2,
                maxWidth: 600,
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
                    views={['day', 'month']}
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
            >
                SEARCH
            </Button>
        </Box>
    );
}

export default Services;
