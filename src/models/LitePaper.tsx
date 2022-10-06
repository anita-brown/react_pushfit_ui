import React from 'react'
import BannerCard from '../components/litepaper/BannerCard'
import Header from '../components/litepaper/Header'
import MarketChart from '../components/marketchart/MarketChart'
import MintCard from '../components/mintcard/MintCard'


const LitePaper = () => {
  return (
    <section>
          <Header />
          <BannerCard />
          <MintCard />
          <MarketChart/>
    </section>
  )
}

export default LitePaper
