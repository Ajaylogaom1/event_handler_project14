// src/components/Availability/AvailabilityForm.tsx
import React, { useState } from 'react';
import { createAvailability, fetchAvailability } from '../../utils/api';
import { Link } from 'react-router-dom';
import './avalability.css'

const AvailabilityForm: React.FC = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [duration, setDuration] = useState(30);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createAvailability({ start: new Date(start), end: new Date(end), duration });
            setStart('');
            setEnd('');
            setDuration(30);
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  sticky-top">
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

        <div className="container mt-5">
        <h2 >Set Availability</h2><br></br>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="startTime" className="form-label">Start Time</label>
                <input
                    type="datetime-local"
                    id="startTime"
                    className="form-control"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="endTime" className="form-label">End Time</label>
                <input
                    type="datetime-local"
                    id="endTime"
                    className="form-control"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="duration" className="form-label">Duration (minutes)</label>
                <input
                    type="number"
                    id="duration"
                    className="form-control"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {error && <p className="text-danger mt-2">{error}</p>}
        </form>
        <br></br>
        <hr></hr>
    </div>

    </div>
    );
};

export default AvailabilityForm;
