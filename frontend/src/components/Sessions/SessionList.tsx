// src/components/Sessions/SessionList.tsx
import React, { useEffect, useState } from 'react';
import { fetchSessions } from '../../utils/api';

const SessionList: React.FC = () => {
    const [sessions, setSessions] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSessions = async () => {
            try {
                const response = await fetchSessions();
                setSessions(response.data);
            } catch (err: any) {
                setError(err.response?.data?.message || 'An error occurred');
            }
        };
        loadSessions();
    }, []);

    return (
             <div className="container mt-5">
            <h2 className="mb-4">Scheduled Sessions</h2>
            {error && <p className="text-danger mb-4">{error}</p>}
            <ul className="list-group">
                {sessions.map((session) => (
                    <li key={session._id} className="list-group-item mb-3">
                         <div className="d-flex justify-content-between align-items-center">
                            <div>
                            <strong>{session.start}</strong> - <strong>{session.end}</strong>
                            </div>
                        </div>
                        <ul className="list-group mt-2">
                            {session.attendees.map((attendee: any, index: number) => (
                                <li key={index} className="list-group-item">{attendee.email}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SessionList;
