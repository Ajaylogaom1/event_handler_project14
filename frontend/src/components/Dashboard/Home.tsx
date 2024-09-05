import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return(
        <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img src="media/pic.webp" style={{ width: "70%" }} alt='img'/>
          </div>
          <div className="col-6">
            <h1 className="mb-3 fs-2">Dynamic User Availability and Event Scheduling System
            </h1>
            <p>
            The Availability section of the Dynamic User Availability and Event Scheduling System is designed to manage and display users' availability in real-time. This section enables users to set, view, and update their availability slots, ensuring that scheduling conflicts are minimized and that events are organized efficiently
            </p>
            <Link to="/availability"  style={{ textDecoration: "none" }} >Manage Availability</Link>
            <p className="mt-5">
              TThe Sessions section of the Dynamic User Availability and Event Scheduling System is designed to manage and coordinate sessions, meetings, or events that users wish to schedule. This section focuses on creating, organizing, and tracking sessions, ensuring that all participants are informed and that the sessions run smoothly.
            </p>
            <Link to="/sessions" style={{ textDecoration: "none" }}>Manage Sessions</Link>
          </div>
        </div>
      </div>
    );
};
export default Home;