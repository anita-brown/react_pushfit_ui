import React from 'react';
import BannerOne from './components/banner/BannerOne';
import BannerTwo from './components/banner/BannerTwo';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className='px-16'>
      <NavBar />
      <Hero />
      <BannerOne />
      <BannerTwo/>
    </div>
  );
}

export default App;
