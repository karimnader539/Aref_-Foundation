import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import Story from './pages/Story'
import RestaurantDetails from './pages/RestaurantDetails'
import Hotels from './pages/Hotels'
import HotelDetails from './pages/HotelDetails'

import { ThemeProvider } from './context/ThemeContext'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="restaurants/:id" element={<RestaurantDetails />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="hotels/:id" element={<HotelDetails />} />
            <Route path="story" element={<Story />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
