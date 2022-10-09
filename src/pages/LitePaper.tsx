import React from 'react'
import BannerCard from '../components/litepaper/BannerCard'
import Header from '../components/litepaper/Header'
import MarketChart from '../components/marketchart/MarketChart'
import MintCard from '../components/mintcard/MintCard'
import RoadMap from '../components/roadmap/RoadMap'
import Tokenmetrics from '../components/tokenmetrics/Tokenmetrics'


const LitePaper = () => {
  return (
    <section className="lg:px-[6rem] px-[1.5rem] z-0">
      <Header />
      <BannerCard />
      <MintCard />
      <MarketChart />
      <Tokenmetrics />
      <RoadMap />
    </section>
  );
}

export default LitePaper
