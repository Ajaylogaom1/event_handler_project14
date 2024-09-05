// src/components/Dashboard/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Home from './Home';

const Dashboard: React.FC = () => {
    return (
        <>
        <Navbar />
        <Home />
        <Footer />
        </>      
);
    
};

export default Dashboard;

