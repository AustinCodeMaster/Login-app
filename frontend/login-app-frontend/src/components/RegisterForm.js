import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password}),
            });
            const result = await response.text();
            alert(result);
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed');
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="input-group">
                    <span className="input-icon">👤</span>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                
                <div className="input-group">
                    <span className="input-icon">🔒</span>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="login-button">Register</button>
            </form>
            
            <div className="register-link">
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

export default RegisterForm;