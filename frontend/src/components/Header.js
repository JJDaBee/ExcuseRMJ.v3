import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

function Header() {
    return (
        <AppBar
            position="static"
            color="default"
            sx={{
                backgroundColor: '#fdf8e4',
                boxShadow: 'none',
                borderBottom: '1px solid #ccc',
            }}
        >
            <Toolbar>
                {/* Logo and Title */}
                <Box
                    sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
                >
                    <img
                        src={logo}
                        alt="VolunTherapy Logo"
                        style={{ height: 40, marginRight: 8 }}
                    />
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        sx={{ fontWeight: 'bold', color: '#7cb342' }}
                    >
                        VOLUNTHERAPY
                    </Typography>
                </Box>

                {/* Navigation Links */}
                <Box sx={{ display: 'flex', gap: 3, marginRight: 2 }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about-us"
                        sx={{ color: '#000' }}
                    >
                        About Us
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/services"
                        sx={{ color: '#000' }}
                    >
                        Services
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact-us"
                        sx={{ color: '#000' }}
                    >
                        Contact Us
                    </Button>
                </Box>

                {/* Search Icon */}
                <IconButton color="inherit" sx={{ marginRight: 2 }}>
                    <SearchIcon />
                </IconButton>

                {/* Login/Sign Up Button */}
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<AccountCircleIcon />}
                    sx={{
                        backgroundColor: '#a0d468',
                        color: '#000',
                        fontWeight: 'bold',
                        textTransform: 'none',
                    }}
                >
                    LOGIN/SIGN UP
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
