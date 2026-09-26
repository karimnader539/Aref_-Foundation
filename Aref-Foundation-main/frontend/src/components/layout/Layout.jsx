import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const routeOrder = ['/', '/restaurants', '/hotels', '/story'];

const Layout = () => {
  const location = useLocation();
  const [animKey, setAnimKey] = useState(location.pathname);
  const [direction, setDirection] = useState('right');
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    const prevPath = prevPathRef.current;

    if (currentPath !== prevPath) {
      const getIndex = (path) => {
        const found = routeOrder.indexOf(path);
        if (found !== -1) return found;
        if (path.startsWith('/restaurants/')) return 1.5;
        if (path.startsWith('/hotels/')) return 2.5;
        return 99;
      };

      const prevIdx = getIndex(prevPath);
      const currIdx = getIndex(currentPath);

      if (currIdx < prevIdx) {
        setDirection('left');
      } else {
        setDirection('right');
      }

      setAnimKey(currentPath);
      prevPathRef.current = currentPath;
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Top Gold Horizontal Curtain Transition Bar */}
      <div 
        key={`curtain-${animKey}`}
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent z-50 animate-gold-curtain pointer-events-none shadow-[0_0_15px_#C5A059]"
      />

      <Navbar />
      
      <main 
        key={`main-${animKey}`} 
        className={`flex-grow flex flex-col w-full ${
          direction === 'left' ? 'animate-page-slide-left' : 'animate-page-slide-right'
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
