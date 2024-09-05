// src/components/Sessions/SessionForm.tsx
import React, { useState } from 'react';
import { createSession } from '../../utils/api';
import { Link } from 'react-router-dom';

const SessionForm: React.FC = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [attendees, setAttendees] = useState<string[]>(['']);
    const [error, setError] = useState<string | null>(null);

    const handleAttendeeChange = (index: number, value: string) => {
        const newAttendees = [...attendees];
        newAttendees[index] = value;
        setAttendees(newAttendees);
    };

    const handleAddAttendee = () => {
        setAttendees([...attendees, '']);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const attendeeObjects = attendees.map((email) => ({ name: '', email }));
            await createSession({ start: new Date(start), end: new Date(end), attendees: attendeeObjects });
            setStart('');
            setEnd('');
            setAttendees(['']);
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className='body1'>
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
        <div className="container mt-5">
        <h2 className="mb-4">Schedule Session</h2>
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
            {attendees.map((attendee, index) => (
                <div className="mb-3" key={index}>
                    <label htmlFor={`attendee${index}`} className="form-label">Attendee Email</label>
                    <input
                        type="email"
                        id={`attendee${index}`}
                        className="form-control"
                        value={attendee}
                        onChange={(e) => handleAttendeeChange(index, e.target.value)}
                        placeholder="Attendee Email"
                        required
                    />
                </div>
            ))}
            <button type="button" className="btn btn-secondary mb-3" onClick={handleAddAttendee}>Add Attendee</button><br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
            {error && <p className="text-danger mt-3">{error}</p>}
        </form>
        <br></br>
        <hr></hr> 
      </div>
    </div>
    );
};

export default SessionForm;
