import React from 'react'

const Hero = () => {
  return (
    <div>
      <h3 className='text-center mt-5 mb-3'>Charges</h3>
      <h4 className='text-center mb-5 text-muted fs-5'>List of all charges and taxes</h4>
      <div className='container'>
        <div className='row '>
          <div className='col p-5 mt-5 text-center'>
            <img src='media/images/pricingEquity.svg'></img>
            <h2 className='text-center text-black-40'>Free equity delivery</h2>
            <p className='mt-3 text-center fs-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
          </div>
          <div className='col p-5 mt-5 text-center'>
            <img src='media/images/intradayTrades.svg'></img>
            <h2 className='text-center text-black-40'>Intraday and F&O trades</h2>
            <p className='mt-3 text-center fs-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='col p-5 mt-5 text-center'>
            <img src='media/images/pricingEquity.svg'></img>
            <h2 className='text-center text-black-40'>Free direct MF</h2>
            <p className='mt-3 text-center fs-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Hero