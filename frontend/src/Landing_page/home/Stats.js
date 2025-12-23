import React from 'react'

const Stats = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 mt-5'>
          <h2>Trust with confidence</h2>
          <h4 className='mt-3 text-black-40 fw-normal'>Customer-first always</h4>
          <p className='text-black-50'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          <h4 className='mt-3 text-black-40 fw-normal'>No spam or gimmicks</h4>
          <p className='text-black-50'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h4 className='mt-3 text-black-40 fw-normal'>The Zerodha universe</h4>
          <p className='text-black-50'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
          <h4 className='mt-3 text-black-40 fw-normal'>Do better with money</h4>
          <p className='text-black-50'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-6'>
          <img src='media/images/ecosystem.png'className='mt-5' style={{width:"100%"}}></img>
        </div>
      </div>
    </div>
  )
}

export default Stats