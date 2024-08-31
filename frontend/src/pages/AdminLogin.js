import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Hardcoded credentials
    const hardcodedUsername = 'a1';
    const hardcodedPassword = '123';

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the entered username and password match the hardcoded values
        if (username === hardcodedUsername && password === hardcodedPassword) {
            setMessage('Login successful!');
            const fakeToken = 'fake-jwt-token';
            onLogin(fakeToken, 'admin'); // Pass role as 'admin'
        } else {
            setMessage('Invalid username or password!');
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
                    Admin Login
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
            </Box>
        </Box>
    );
}

export default AdminLogin;
