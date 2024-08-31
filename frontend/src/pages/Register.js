import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState(''); // New state for address
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match!');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, address, password, dateOfBirth: selectedDate }),
            });
            const data = await response.json();
            setMessage(data.message || 'Registration successful!');
        } catch (error) {
            setMessage('Registration failed!');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                padding: 4,
                backgroundColor: '#e0f7e0',
                borderRadius: 2,
                maxWidth: 600,
                width: '100%',
                margin: 'auto',
                boxShadow: 4,
            }}
        >
            <h2>Volunteer Sign-Up</h2>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your Name"
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your Address"
                        required
                        fullWidth
                        margin="normal"
                    /><br/><br/>
                    <Box sx={{ mb: 2 }}>
                        <DatePicker
                            label="Date of Birth"
                            value={selectedDate}
                            onChange={(newDate) => setSelectedDate(newDate)}
                            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
                        />
                    </Box>
                    <TextField
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter your Password"
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Sign Up
                        </Button>
                    </Box>
                </form>
            </LocalizationProvider>
            {message && <p style={{ marginTop: '1rem', fontSize: '1rem' }}>{message}</p>}
        </Box>
    );
}

export default Register;
