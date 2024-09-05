// src/components/Auth/Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../utils/api';
import './Auth.css';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register({ email, password });
            navigate('/login');
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">Dashboard</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/availability" className="nav-link" >Manage Availability</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/sessions" className="nav-link">Manage Sessions</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        <div className="register-container">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>
            <br></br>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary btn-block">Register</button>
            {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
        </form>
    </div>
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <p className='footer-text'>
              <p>&copy; Dynamic User Availability and Event Scheduling System</p>
              For more contact : <p><a href="mailto:ajaylogaom14@gmail.com">ajaylogaom14@gmail.com</a></p>
            </p>
        </div>
      </div>
    </div>
    </footer>
    </div>
    );
};

export default Register;
