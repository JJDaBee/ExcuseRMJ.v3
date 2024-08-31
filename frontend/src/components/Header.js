import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

function Header({ isAuthenticated, isAdmin, onLogout }) {
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
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box
                    sx={{ display: 'flex', alignItems: 'center' }}
                    component={Link}
                    to="/"
                    style={{ textDecoration: 'none' }}
                >
                    <img
                        src={logo}
                        alt="VolunTherapy Logo"
                        style={{ height: 40, marginRight: 8 }}
                    />
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: '#7cb342' }}
                    >
                        VOLUNTHERAPY
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about-us"
                        sx={{
                            color: '#000',
                            fontWeight: 'normal',
                            textTransform: 'none',
                        }}
                    >
                        About Us
                    </Button>
                    {isAuthenticated && !isAdmin && (
                        <Button
                            color="inherit"
                            component={Link}
                            to="/services"
                            sx={{
                                color: '#000',
                                fontWeight: 'normal',
                                textTransform: 'none',
                            }}
                        >
                            Services
                        </Button>
                    )}
                    {isAdmin && (
                        <Button
                            color="inherit"
                            component={Link}
                            to="/admin"
                            sx={{
                                color: '#000',
                                fontWeight: 'normal',
                                textTransform: 'none',
                            }}
                        >
                            Admin
                        </Button>
                    )}
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact-us"
                        sx={{
                            color: '#000',
                            fontWeight: 'normal',
                            textTransform: 'none',
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>

                    {isAuthenticated ? (
                        <Button
                            variant="contained"
                            color="success"
                            onClick={onLogout}
                            sx={{
                                backgroundColor: '#a0d468',
                                color: '#000',
                                fontWeight: 'bold',
                                textTransform: 'none',
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="success"
                            component={Link}
                            to="/login"
                            sx={{
                                backgroundColor: '#a0d468',
                                color: '#000',
                                fontWeight: 'bold',
                                textTransform: 'none',
                            }}
                        >
                            LOGIN/SIGN UP
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
