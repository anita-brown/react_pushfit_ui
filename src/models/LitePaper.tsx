import React from 'react'
import BannerCard from '../components/litepaper/BannerCard'
import Header from '../components/litepaper/Header'
import MarketChart from '../components/marketchart/MarketChart'
import MintCard from '../components/mintcard/MintCard'
import RoadMap from '../components/roadmap/RoadMap'
import Tokenmetrics from '../components/tokenmetrics/Tokenmetrics'


const LitePaper = () => {
  return (
    <section>
          <Header />
          <BannerCard />
          <MintCard />
          <MarketChart />
          <Tokenmetrics />
          <RoadMap/>
    </section>
  )
}

export default LitePaper
