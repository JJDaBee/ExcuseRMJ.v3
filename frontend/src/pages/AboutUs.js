import React from 'react';
import { Box, Typography } from '@mui/material';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';

const AboutUs = () => {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#f2f9f2',
                textAlign: 'center',
                minHeight: '100vh',
            }}
        >
            {/* About Us Content */}
            <Box
                sx={{
                    backgroundColor: '#d8f3d8',
                    padding: 4,
                    marginTop: 4,
                    borderRadius: 2,
                    maxWidth: '800px',
                    margin: 'auto',
                }}
            >
                <Typography variant="h5" gutterBottom>
                    ABOUT US
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', lineHeight: '1.8' }}
                >
                    At <strong>VOLUNTHERAPY</strong>, we connect compassionate
                    volunteers with our patients who are in need of assistance
                    during physiotherapy sessions at home.
                    <br />
                    <br />
                    Our mission is to enhance recovery and improve mobility by
                    offering support to those undergoing physiotherapy, ensuring
                    they have the help they need to perform exercises and stay
                    motivated. Whether you're a trained therapist or someone
                    with a passion for helping others, you can make a meaningful
                    difference in someone's rehabilitation journey. Join us in
                    promoting better health and independence for all.
                </Typography>
            </Box>

            {/* Illustration */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 4,
                    marginTop: 4,
                }}
            >
                <img
                    src={logo1}
                    alt="Physiotherapy"
                    style={{ width: '150px', height: 'auto' }}
                />
                <img
                    src={logo2}
                    alt="Volunteers"
                    style={{ width: '150px', height: 'auto' }}
                />
            </Box>
        </Box>
    );
};

export default AboutUs;
