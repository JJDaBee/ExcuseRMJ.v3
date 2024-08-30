// src/components/LandingPage.js
import React from 'react';

function LandingPage() {
    return (
        <div>
            <h1>Welcome to the Landing Page!</h1>
            <p>Select an option to continue:</p>
            <div>
                <button>
                    <a href="/register">Register</a>
                </button>
                <button>
                    <a href="/login">Login</a>
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
