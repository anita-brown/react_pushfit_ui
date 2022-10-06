import React from 'react';
import BannerOne from './components/banner/BannerOne';
import BannerThree from './components/banner/BannerThree';
import BannerTwo from './components/banner/BannerTwo';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className='px-16'>
      <NavBar />
      <Hero />
      <BannerOne />
      <BannerTwo />
      <BannerThree/>
    </div>
  );
}

export default App;
