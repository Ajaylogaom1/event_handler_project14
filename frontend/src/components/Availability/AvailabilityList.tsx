// src/components/Availability/AvailabilityList.tsx
import React, { useEffect, useState } from 'react';
import { fetchAvailability } from '../../utils/api';

const AvailabilityList: React.FC = () => {
    const [availability, setAvailability] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadAvailability = async () => {
            try {
                const response = await fetchAvailability();
                setAvailability(response.data);
            } catch (err: any) {
                setError(err.response?.data?.message || 'An error occurred');
            }
        };
        loadAvailability();
    }, []);

    return (
        <div className="container mt-5">
        <h2 className="mb-4">Availability</h2>
        {error && <p className="text-danger mb-3">{error}</p>}
        <ul className="list-group">
            {availability.map((item) => (
                <li key={item._id} className="list-group-item">
                    {item.start} - {item.end} ({item.duration} minutes)
                </li>
            ))}
        </ul>
    </div>
    );
};

export default AvailabilityList;
