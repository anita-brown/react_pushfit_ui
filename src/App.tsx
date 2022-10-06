import React from 'react';
import BannerFive from './components/banner/BannerFive';
import BannerFour from './components/banner/BannerFour';
import BannerOne from './components/banner/BannerOne';
import BannerThree from './components/banner/BannerThree';
import BannerTwo from './components/banner/BannerTwo';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className='px-16'>
      <NavBar />
      <Hero />
      <BannerOne />
      <BannerTwo />
      <BannerThree />
      <BannerFour />
      <BannerFive />
      <Footer/>
    </div>
  );
}

export default App;
