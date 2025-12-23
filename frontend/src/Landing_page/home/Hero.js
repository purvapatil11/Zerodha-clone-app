import React from 'react'

const Hero = () => {
  return (
   <div>
      <div className='container p-5'>
        <div className='row'>
          <img src='media/images/homeHero.png' className='img-fluid w-70 vh-50 mb-5' alt='Hero image'/></div>
          <h2 className='text-center text-black-45'>Invest in Everything</h2>
          <h5 className='text-center text-black-50'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
          <div className='text-center p-3'>
          <button className='p-2 text-white rounded' style={{width:"220px", background:"#639CF8"}}>Signup Now</button>
          </div>
      </div>
   </div>
  )
}

export default Hero