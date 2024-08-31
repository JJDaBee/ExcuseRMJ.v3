import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function VolunteerLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                'http://localhost:5000/api/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                }
            );
            const data = await response.json();
            if (data.token) {
                setMessage('Login successful!');
                onLogin(data.token, 'volunteer');
            } else {
                setMessage(data.message || 'Login failed!');
            }
        } catch (error) {
            setMessage('Login failed!');
        }
    };

    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#fdf8e4',
                textAlign: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    maxWidth: '400px',
                    width: '100%',
                    backgroundColor: '#d8f3d8',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ marginBottom: 4, fontWeight: 'bold' }}
                >
                    Volunteer Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        sx={{
                            marginTop: 2,
                            padding: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        Login
                    </Button>
                </form>
                {message && (
                    <Typography
                        sx={{
                            marginTop: 2,
                            color:
                                message === 'Login successful!'
                                    ? 'green'
                                    : 'red',
                        }}
                    >
                        {message}
                    </Typography>
                )}
                <Typography sx={{ marginTop: 4 }}>
                    Don't have an account?{' '}
                    <Link to="/register">Sign up for an account</Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default VolunteerLogin;
