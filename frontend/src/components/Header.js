import React, { useState } from 'react';
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

    const handleButtonClick = (path) => {
        setActiveButton(path);
    };

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
                        onClick={() => handleButtonClick('/about-us')}
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
                        onClick={() => handleButtonClick('/services')}
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
                        onClick={() => handleButtonClick('/contact-us')}
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
                >
                    LOGIN/SIGN UP
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
