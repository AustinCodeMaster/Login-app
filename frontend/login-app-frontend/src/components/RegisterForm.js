import React, {useState } from 'react';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e)  => {
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
        }catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input
             type="text"
             placeholder="Username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;