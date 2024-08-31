import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/logo3.png'; // Adjust the path if necessary

function LoginPage() {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#fdf8e4',
                textAlign: 'center',
                minHeight: '100vh',
            }}
        >
            <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: '#4CAF50', marginBottom: 2 }}
            >
                WELCOME{' '}
                <span role="img" aria-label="smile">
                    😊
                </span>
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 4,
                    marginTop: 2,
                }}
            >
                <img
                    src={backgroundImage}
                    alt="Volunteer and Admin"
                    style={{
                        width: '80%',
                        maxWidth: '30%',
                    }}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                <Button
                    component={Link}
                    to="/volunteer-login"
                    variant="contained"
                    sx={{
                        backgroundColor: '#cde6c7',
                        color: '#000',
                        fontWeight: 'bold',
                        padding: '15px 30px',
                        borderRadius: '20px',
                        fontSize: '18px',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            backgroundColor: '#b5d6a6',
                        },
                    }}
                >
                    VOLUNTEER
                </Button>

                <Button
                    component={Link}
                    to="/admin-login"
                    variant="contained"
                    sx={{
                        backgroundColor: '#cde6c7',
                        color: '#000',
                        fontWeight: 'bold',
                        padding: '15px 30px',
                        borderRadius: '20px',
                        fontSize: '18px',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            backgroundColor: '#b5d6a6',
                        },
                    }}
                >
                    ADMIN
                </Button>
            </Box>
        </Box>
    );
}

export default LoginPage;
