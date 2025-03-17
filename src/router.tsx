import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './App';
import ConnectWallet from './components/connect/connect';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/dashboard/dashboard';
import Did from './components/dashboard/did';
import Referal from './components/dashboard/referal';
import Invite from './components/refer/refer';
import Daily from './components/dashboard/daily';
import Profile from './components/dashboard/profile';
// import Footer from './components/reusable/footer';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/connect" element={<ConnectWallet />} />
                <Route path="/refer" element={<Invite />} />
                <Route path="/navigation" element={<Navigation />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/did" element={<Did />} />
                <Route path="/dashboard/referal" element={<Referal />} />
                <Route path="/dashboard/daily" element={<Daily />} />
                <Route path="/dashboard/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;