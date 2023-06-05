import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

function Layout() {
    return (
        <div className="wrapper">
          <AuthProvider>
            <Navbar />
            <Outlet />
          </AuthProvider>
        </div>
    );
}

export default Layout;