import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';

import logo from '../images/logo.png'; // Adjust the path if necessary

function Header() {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname);

    useEffect(() => {
        // When location changes, set the active button only if not on the landing page
        if (location.pathname !== '/') {
            setActiveButton(location.pathname);
        } else {
            setActiveButton(null); // Reset active button on the landing page
        }
    }, [location.pathname]);

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
                <Box
                    sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
                    component={Link}
                    to="/"
                    style={{ textDecoration: 'none' }} // Ensure there's no underline on the link
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

                <Box sx={{ display: 'flex', gap: 3, marginRight: 2 }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about-us"
                        sx={{
                            color:
                                activeButton === '/about-us'
                                    ? '#7cb342'
                                    : '#000',
                            fontWeight:
                                activeButton === '/about-us'
                                    ? 'bold'
                                    : 'normal',
                        }}
                        onClick={() => setActiveButton('/about-us')}
                    >
                        About Us
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/services"
                        sx={{
                            color:
                                activeButton === '/services'
                                    ? '#7cb342'
                                    : '#000',
                            fontWeight:
                                activeButton === '/services'
                                    ? 'bold'
                                    : 'normal',
                        }}
                        onClick={() => setActiveButton('/services')}
                    >
                        Services
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact-us"
                        sx={{
                            color:
                                activeButton === '/contact-us'
                                    ? '#7cb342'
                                    : '#000',
                            fontWeight:
                                activeButton === '/contact-us'
                                    ? 'bold'
                                    : 'normal',
                        }}
                        onClick={() => setActiveButton('/contact-us')}
                    >
                        Contact Us
                    </Button>
                </Box>

                <IconButton color="inherit" sx={{ marginRight: 2 }}>
                    <SearchIcon />
                </IconButton>

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
                    component={Link}
                    to="/login"
                >
                    LOGIN/SIGN UP
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
