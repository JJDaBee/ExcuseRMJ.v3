import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import VolunteerLogin from './pages/VolunteerLogin';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin'; // Import the Admin component

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token) {
            setIsAuthenticated(true);
            if (role === 'admin') {
                setIsAdmin(true);
            }
        }
    }, []);

    const handleLogin = (token, role) => {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        setIsAuthenticated(true);
        if (role === 'admin') {
            setIsAdmin(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsAuthenticated(false);
        setIsAdmin(false);
    };

    return (
        <Router>
            <Header
                isAuthenticated={isAuthenticated}
                isAdmin={isAdmin}
                onLogout={handleLogout}
            />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />
                <Route
                    path="/volunteer-login"
                    element={<VolunteerLogin onLogin={handleLogin} />}
                />
                <Route
                    path="/admin-login"
                    element={<AdminLogin onLogin={handleLogin} />}
                />
                {isAuthenticated ? (
                    <>
                        <Route path="/services" element={<Services />} />
                        {isAdmin && (
                            <Route path="/admin" element={<Admin />} />
                        )}{' '}
                        {/* Admin route */}
                    </>
                ) : (
                    <Route
                        path="/services"
                        element={<Navigate to="/volunteer-login" />}
                    />
                )}
            </Routes>
        </Router>
    );
}

export default App;
