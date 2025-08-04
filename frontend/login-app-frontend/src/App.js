import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  return(
    <Router>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>🔥 Welcome to Austin's Login App</h1>
        
        <nav>
          <Link to="/login" style={{ margin: '10px' }}>Login</Link>
          <Link to="/register" style={{ margin: '10px' }}>Register</Link>
        </nav>

        <hr style={{ width: '50%', margin: '40px auto' }} />

        <Routes>
          <Route path="/" element={<LoginForm />} /> {/* 👈 Default route */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;