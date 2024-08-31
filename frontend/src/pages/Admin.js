// src/pages/Admin.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Admin() {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#fdf8e4',
                minHeight: '100vh',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: '#7cb342' }}
            >
                Admin Dashboard
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
                Welcome to the admin dashboard. Here you can manage the
                application settings and user accounts.
            </Typography>
            {/* Add more admin-specific functionalities and components here */}
        </Box>
    );
}

export default Admin;
