import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Adjust the path if necessary

function LandingPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#fdf8e4',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <Typography
                variant="h4"
                sx={{ color: '#000', fontWeight: 'bold', marginBottom: 2 }}
            >
                HELLO!
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{ color: '#000', marginBottom: 2 }}
            >
                WELCOME TO
            </Typography>

            <Box sx={{ marginBottom: 4 }}>
                <img
                    src={logo}
                    alt="VolunTherapy Logo"
                    style={{ width: '150px', height: 'auto' }}
                />
            </Box>

            <Typography
                variant="h3"
                sx={{ color: '#7cb342', fontWeight: 'bold', marginBottom: 4 }}
            >
                VOLUNTHERAPY
            </Typography>

            <Button
                component={Link}
                to="/about-us"
                variant="contained"
                sx={{
                    backgroundColor: '#8bc34a',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '10px 30px',
                    borderRadius: '20px',
                    fontSize: '18px',
                    '&:hover': {
                        backgroundColor: '#7cb342',
                    },
                }}
            >
                BEGIN
            </Button>
        </Box>
    );
}

export default LandingPage;
