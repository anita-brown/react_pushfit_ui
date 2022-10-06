import React from 'react'
import BannerFive from '../components/banner/BannerFive';
import BannerFour from '../components/banner/BannerFour';
import BannerOne from '../components/banner/BannerOne';
import BannerThree from '../components/banner/BannerThree';
import BannerTwo from '../components/banner/BannerTwo';
import Hero from '../components/hero/Hero';

const Home = () => {
  return (
    <section>
      <Hero />
      <BannerOne />
      <BannerTwo />
      <BannerThree />
      <BannerFour />
      <BannerFive />
    </section>
  );
}

export default Home
