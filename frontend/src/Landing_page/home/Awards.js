import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/images/largestBroker.svg'></img>
        </div>
        <div className='col-6 p-3'>
          <h1>Largest Stock broker in India</h1>
          <p className='p-1'>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
          <div className='row'>
            <div className='col-6 p-3'>
                <ul>
            <li>
              <p>Future and options</p>
            </li>
            <li>
              <p>commondity derivatives</p>
            </li>
            <li>
              <p>Currency derivates</p>
            </li>
          </ul>
            </div>
            <div className='col-6 p-3'>
                 <ul>
            <li>
              <p>Stocks & IPOs</p>
            </li>
            <li>
              <p>Direct mutual funds</p>
            </li>
            <li>
              <p>Bonds and Government security</p>
            </li>
          </ul>
            </div>
          </div>
        <img src='media/images/pressLogos.png' style={{width:"95%"}}></img>
        

        </div>
      </div>
    </div>
  )
}

export default Awards