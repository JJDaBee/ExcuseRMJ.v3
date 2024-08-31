import React from 'react';
import { Box, Typography } from '@mui/material';

function ContactUs() {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#fdf8e4',
                textAlign: 'center',
                minHeight: '100vh',
            }}
        >
            {/* Header Section */}
            <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: '#7cb342', marginBottom: 4 }}
            >
                CONTACT US
            </Typography>

            {/* Contact Information */}
            <Box
                sx={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    backgroundColor: '#d8f3d8',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#000', marginBottom: 2 }}
                >
                    Email Us:
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 4 }}>
                    support@voluntherapy.org
                </Typography>

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#000', marginBottom: 2 }}
                >
                    Call Us:
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 4 }}>
                    +65 1234 5678
                </Typography>

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#000', marginBottom: 2 }}
                >
                    Visit Us:
                </Typography>
                <Typography variant="body1">
                    1234 VolunTherapy Lane
                    <br />
                    Singapore S123456
                </Typography>
            </Box>
        </Box>
    );
}

export default ContactUs;
