import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';
import CookieBanner from '../components/Global/CookieBanner';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CookieBanner />
      <Footer />
    </div>
  );
};

export default MainLayout;